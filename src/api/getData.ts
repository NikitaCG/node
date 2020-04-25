export const getData = ({
  api,
  method,
  path,
  body,
}: GetDataType): Promise<any> => {
  const requestUrl = `${api.url}${path}`;

  const request: Promise<any> = fetch(requestUrl, {
    method,
    mode: 'cors',
    body: JSON.stringify(body),
  }).then((response: any) => {
    if (response.status === 404) {
      return null;
    }
    if (!response.ok || response.error) {
      const error = {};
      throw error;
    }
    return response.json();
  })
  .then((data) => ({ data }))
  .catch(() => ({
    error: `Ошибка запроса: ${path}`,
  }));

  return request;
};
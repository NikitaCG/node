type APIType = {
  url: string,
};

type GetDataType = {
  api: APIType,
  method: 'GET' | 'POST' | 'DELETE',
  path: string,
  body?: any,
};

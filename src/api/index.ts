import { getData } from './getData';

export const getTodos = (api: APIType, username: string) => getData({
  api,
  method: 'GET',
  path: `/api/todos/${username}`,
});
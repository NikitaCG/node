import { getData } from './getData';

export const getTodos = (api: APIType, username: string) => getData({
  api,
  method: 'GET',
  path: `/api/todos/${username}`,
});

export const getTodo = (api: APIType, id: TodoInfo['id']) => getData({
  api,
  method: 'GET',
  path: `/api/todo/${id}`,
});
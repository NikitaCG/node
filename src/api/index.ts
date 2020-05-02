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

export const postTodo = (api: APIType, body: Todo) => getData({
  api,
  method: 'POST',
  path: `/api/todo/`,
  body,
});

export const deleteTodo = (api: APIType, id: TodoInfo['id']) => getData({
  api,
  method: 'DELETE',
  path: `/api/todo/${id}`,
  body: { id },
});
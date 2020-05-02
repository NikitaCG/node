import { Store } from 'redux';

import config from '../../config/config.json';
import { deleteTodo, getTodo, getTodos,  postTodo } from '../api/index';

import { DELETE_TODO, GET_TODO, GET_TODOS } from '../reducers/todos';

/**
 * Получения списка todo
 * 
 * @param username - имя пользователя
 */
export const fetchTodos = (
  username: string,
): any => async (
  dispatch: Store['dispatch'],
) => {
  const response = await getTodos(config.api, username);

  dispatch({ type: GET_TODOS, data: response.data});
};

/**
 * Получение todo
 * 
 * @param id - todo id
 */
export const fetchTodo = (
  id: TodoInfo['id'],
): any => async (
  dispatch: Store['dispatch'],
) => {
  const response = await getTodo(config.api, id);

  dispatch({ type: GET_TODO, data: response.data});
};

/**
 * Обновление или создание todo
 * 
 * @param body - данные todo
 */
export const fetchPostTodo = (
  body: Todo,
): any => async (
  dispatch: Store['dispatch'],
) => {
  const response = await postTodo(config.api, body);

  console.log("response", response);
};

/**
 * Удаление todo
 * 
 * @param id - todo id
 */
export const fetchDeleteTodo = (
  id: TodoInfo['id'],
): any => async (
  dispatch: Store['dispatch'],
) => {
  const response = await deleteTodo(config.api, id);

  dispatch({ type: DELETE_TODO, data: id});
};
import { Store } from 'redux';

import config from '../../config/config.json';
import { getTodo, getTodos } from '../api/index';

import { GET_TODO, GET_TODOS } from '../reducers/todos';

export const fetchTodos = (
  username: string,
): any => async (
  dispatch: Store['dispatch'],
) => {
  const response = await getTodos(config.api, username);

  dispatch({ type: GET_TODOS, data: response.data});
};

export const fetchTodo = (
  id: TodoInfo['id'],
): any => async (
  dispatch: Store['dispatch'],
) => {
  const response = await getTodo(config.api, id);

  dispatch({ type: GET_TODO, data: response.data});
};
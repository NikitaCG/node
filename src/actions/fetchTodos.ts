import { Store } from 'redux';

import config from '../../config/config.json';
import { getTodos } from '../api/index';
import { GET_TODOS } from '../reducers/todos';

export const fetchTodos = (
  username: string,
): any => async (
  dispatch: Store['dispatch'],
) => {
  const response = await getTodos(config.api, username);

  dispatch({ type: GET_TODOS, data: response.data});
};
import { Store } from 'redux';

import config from '../../config/config.json';

import { 
  CHANGE_TODO_HAS_ATTACHMENT,
  CHANGE_TODO_IS_DONE,
  CHANGE_TODO_NAME,
} from '../reducers/todos';

export const changeTodoName = (
  todoName: string,
): any => async (
  dispatch: Store['dispatch'],
) => dispatch({ type: CHANGE_TODO_NAME, data: todoName});

export const changeTodoIsDone = (
  todoIsDone: boolean,
): any => async (
  dispatch: Store['dispatch'],
) => dispatch({ type: CHANGE_TODO_IS_DONE, data: todoIsDone});

export const changeTodoHasAttachment = (
  todoHasAttachment: boolean,
): any => async (
  dispatch: Store['dispatch'],
) => dispatch({ type: CHANGE_TODO_HAS_ATTACHMENT, data: todoHasAttachment});
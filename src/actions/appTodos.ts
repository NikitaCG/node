import { Store } from 'redux';

import { 
  CHANGE_TODO_HAS_ATTACHMENT,
  CHANGE_TODO_IS_DONE,
  CHANGE_TODO_NAME,
  INITIAL_CREATE_TODO,
} from '../reducers/todos';

/**
 * Изменение имени todo
 * 
 * @param todoName - название todo
 */
export const changeTodoName = (
  todoName: string,
): any => async (
  dispatch: Store['dispatch'],
) => dispatch({ type: CHANGE_TODO_NAME, data: todoName});

/**
 * Изменение статуса готовности todo
 * 
 * @param todoIsDone - статус готовности todo
 */
export const changeTodoIsDone = (
  todoIsDone: boolean,
): any => async (
  dispatch: Store['dispatch'],
) => dispatch({ type: CHANGE_TODO_IS_DONE, data: todoIsDone});

/**
 * Изменение приложения к todo
 * 
 * @param todoHasAttachment - есть ли приложение к todo
 */
export const changeTodoHasAttachment = (
  todoHasAttachment: boolean,
): any => async (
  dispatch: Store['dispatch'],
) => dispatch({ type: CHANGE_TODO_HAS_ATTACHMENT, data: todoHasAttachment});

/**
 * Очистка полей при создании нового todo
 */
export const initialCreateTodo = (): any => async (
  dispatch: Store['dispatch'],
) => dispatch({ type: INITIAL_CREATE_TODO});
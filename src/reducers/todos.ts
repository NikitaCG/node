import { Action } from 'redux';

import initialState from './initialState.json';

export const GET_TODO = 'GET_TODO';
export const GET_TODOS = 'GET_TODOS';
export const CHANGE_TODO_NAME = 'CHANGE_TODO_NAME';
export const CHANGE_TODO_IS_DONE = 'CHANGE_TODO_IS_DONE';
export const CHANGE_TODO_HAS_ATTACHMENT = 'CHANGE_TODO_HAS_ATTACHMENT';

type ActionType = {
  type: typeof GET_TODOS
    | typeof GET_TODO
    | typeof CHANGE_TODO_NAME
    | typeof CHANGE_TODO_IS_DONE
    | typeof CHANGE_TODO_HAS_ATTACHMENT,
  data: TodoInfo[],
} & Action;

export default function todos(state = initialState, action: ActionType) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todosInfo: [
          ...action.data,
        ],
      };

    case GET_TODO:
      return {
        ...state,
        todo: {
          ...action.data,
        },
      };

      case CHANGE_TODO_NAME:
        return {
          ...state,
          todo: {
            ...state.todo,
            todo: action.data,
          },
        };

      case CHANGE_TODO_IS_DONE:
        return {
          ...state,
          todo: {
            ...state.todo,
            isDone: action.data,
          },
        };

      case CHANGE_TODO_HAS_ATTACHMENT:
        return {
          ...state,
          todo: {
            ...state.todo,
            hasAttachment: action.data,
          },
        };

    default: return state;
  }
}
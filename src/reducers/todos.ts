import { Action } from 'redux';

import initialState from './initialState.json';

export const GET_TODOS = 'GET_TODOS';

type ActionType = {
  type: typeof GET_TODOS,
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

    default: return state;
  }
}
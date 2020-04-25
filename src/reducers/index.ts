import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

//reducers
import todos from './todos';

const AppReducers = combineReducers({
  todos,
  routerReducer,
});

export default AppReducers;
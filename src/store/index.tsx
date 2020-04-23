import {applyMiddleware, createStore} from 'redux';
import { Middleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import AppReducer from '../reducers/index';

export const initStore = (middleware: Middleware): Store => {
  const store = createStore(
    AppReducer,
    composeWithDevTools(applyMiddleware(thunk, middleware)),
  );

  if ((module).hot) {
    (module).hot.accept('../reducers/index', () => {
      const nextAppReducer = require('../reducers/index').default;
      store.replaceReducer(nextAppReducer);
    });
  }

  return store;
};

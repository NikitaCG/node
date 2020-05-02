import { createBrowserHistory, History } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Middleware, Store } from 'redux';

import Routing from './routes/index';
import { initStore } from './store/index';

const history: History = createBrowserHistory();

const middleware: Middleware = routerMiddleware(history);

const store: Store = initStore(middleware);

const ProviderTemplate: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routing/>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(
  <ProviderTemplate />,
  document.getElementById('app'),
);

if ((module).hot ){
  (module).hot.accept('./routes/index', () => {
    const NextRouting = require('./routes/index').default;

    ReactDOM.render(
      <ProviderTemplate />
      , document.getElementById('app'),
    );
  });
}

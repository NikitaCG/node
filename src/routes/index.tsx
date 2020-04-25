import React, {Suspense} from 'react';
import {Route} from 'react-router-dom';

import Home from 'Containers/Home/index';

const Router: React.FC = () => (
  <div>
    <Route
      exact
      path="/"
      component={Home}
    />
  </div>
);

export default Router;

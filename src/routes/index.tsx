import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('Containers/Home/index'));
const TodoPage = React.lazy(() => import('Containers/TodoPage'));

const Fallback: React.ReactNode = <div>Loading...</div>;

const Router: React.FC = () => (
  <Suspense fallback={Fallback} >
    <Switch>
      <Route
        exact
        path="/"
        component={() => <Home />}
      />
      <Route
        path="/todo/:id"
        component={(props: any) => <TodoPage {...props} />}
      />
      <Route
        path="/create"
        component={(props: any) => <TodoPage {...props} />}
      />
    </Switch>
  </Suspense>
);

export default Router;

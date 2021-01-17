import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/organisms/Layout';
import Home from './components/pages/Home';
import Game from './components/pages/Game';

import config from './config';

const { ROUTES } = config;

function App(): JSX.Element {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME.href}>
            <Home />
          </Route>
          <Route exact path={ROUTES.GAME.href}>
            <Game />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;

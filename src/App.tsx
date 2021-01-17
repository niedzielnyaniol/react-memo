import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/organisms/Layout';
import Home from './components/pages/Home';
import Game from './components/pages/Game';
import Leaderboard from './components/pages/Leaderboard';

import config from './config';

const { ROUTES } = config;

function App(): JSX.Element {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={ROUTES.HOME.href}>
            <Home />
          </Route>
          <Route exact path={ROUTES.GAME.href}>
            <Game />
          </Route>
          <Route exact path={ROUTES.LEADERBOARD.href}>
            <Leaderboard />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

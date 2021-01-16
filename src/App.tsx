import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './components/pages/Home/Home';

function App(): JSX.Element {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;

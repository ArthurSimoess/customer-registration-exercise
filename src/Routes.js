import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterClients from './pages/RegisterClients';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/clientesCadastrados" component={RegisterClients} />
      </Switch>
    </div>
  );
}

export default Routes;
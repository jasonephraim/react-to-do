import React from 'react';
import { Route, Switch } from 'react-router';

import './App.scss';
import PrivateRoute from './components/shared/PrivateRoutes';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Routes as Switch, Navigate } from 'react-router-dom';
import Login from './pages/Login';

function Routes() {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/" element={ <Navigate to="/login" /> } />
          <Route exact path="/login" element={ <Login /> } />
        </Switch>
      </main>
    </div>
  );
}

export default Routes;

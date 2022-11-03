import React from 'react';
import { Route, Routes as Switch, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import Checkout from './pages/Checkout';

function Routes() {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/" element={ <Navigate to="/login" /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/register" element={ <Register /> } />
          <Route exact path="/customer/products" element={ <Products /> } />
          <Route exact path="/customer/checkout" element={ <Checkout /> } />
        </Switch>
      </main>
    </div>
  );
}

export default Routes;

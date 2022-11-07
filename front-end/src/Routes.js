import React from 'react';
import { Route, Routes as Switch, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import DetailsOrder from './pages/DetailsOrder';
import SellerOrders from './pages/SellerOrders';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route exact path="/customer/orders" element={ <Orders /> } />
      <Route exact path="/customer/orders/:id" element={ <DetailsOrder /> } />
      <Route exact path="/seller/orders" element={ <SellerOrders /> } />
    </Switch>
  );
}

export default Routes;

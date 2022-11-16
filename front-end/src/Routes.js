import React from 'react';
import { Route, Routes as Switch, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import Register from './pages/Register/Register';
import Checkout from './pages/Checkout/Checkout';
import Orders from './pages/Orders/Orders';
import OrderDetails from './pages/OrderDetails/OrderDetails';
import SellerOrders from './pages/SellerOrders/SellerOrders';
import SellerOrderDetails from './pages/SellerOrderDetails/SellerOrderDetails';
import Admin from './pages/Admin';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route exact path="/customer/orders" element={ <Orders /> } />
      <Route exact path="/customer/orders/:id" element={ <OrderDetails /> } />
      <Route exact path="/seller/orders" element={ <SellerOrders /> } />
      <Route exact path="/seller/orders/:id" element={ <SellerOrderDetails /> } />
      <Route exact path="/admin/manage" element={ <Admin /> } />
    </Switch>
  );
}

export default Routes;

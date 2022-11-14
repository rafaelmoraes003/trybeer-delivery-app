import React from 'react';
import CheckoutDetails from '../components/CheckoutDetails';
import NavBar from '../components/Navbar/NavBar';
import TableProducts from '../components/TableProducts';

function Checkout() {
  return (
    <main>
      <NavBar showProducts showOrders />
      <h1>Finalizar Pedido</h1>
      <TableProducts />
      <CheckoutDetails />
    </main>
  );
}

export default Checkout;

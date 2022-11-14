import React from 'react';
import CheckoutDetails from '../../components/CheckoutDetails/CheckoutDetails';
import NavBar from '../../components/Navbar/NavBar';
import TableProducts from '../../components/TableProducts/TableProducts';

function Checkout() {
  return (
    <main>
      <NavBar showProducts showOrders />
      <TableProducts />
      <CheckoutDetails />
    </main>
  );
}

export default Checkout;

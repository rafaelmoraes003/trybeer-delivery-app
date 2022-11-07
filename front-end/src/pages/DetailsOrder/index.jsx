import React from 'react';
import Header from '../../components/OrderDetails/infoOrder';
import NavBar from '../../components/NavBar';
import OrderTable from '../../components/OrderDetails/orderTable';


function DetailsOrder() {
  return (
    <main>
      <NavBar />
      <Header />
      <OrderTable />
    </main>
  );
}

export default DetailsOrder;
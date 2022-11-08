// import { useEffect, useState } from 'react';
// import getOrderDetails from '../../utils/getOrderDetails';

import NavBar from '../../components/NavBar';
import SellerInfo from '../../components/SellerInfo';
import SellerTable from '../../components/SellerTable';

function SellerOrderDetails() {
//   const [orders, setOrders] = useState([]);
//   const user = JSON.parse(localStorage.getItem('user'));

  //   useEffect(() => {
  //     const getOrders = async () => {
  //       await getOrderDetails('sales/seller', user.id, setOrders);
  //     };
  //     getOrders();
  //   }, [user]);

  return (
    <div>
      <NavBar />
      <SellerInfo />
      <SellerTable />
      {/* <NavBar showProducts={ false } />
      {orders.map((order, i) => (
        <OrderCard
          key={ i }
          id={ order.id }
          loopIndex={ i }
          role={ user.role }
          saleDate={ order.saleDate }
          status={ order.status }
          totalPrice={ order.totalPrice }
        /> */}
      {/* ))} */}
    </div>
  );
}

export default SellerOrderDetails;

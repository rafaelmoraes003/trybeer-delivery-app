import { useEffect, useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import OrderCard from '../components/OrderCard';
import getDataFromEndpoint from '../utils/getDataFromEndpoint';

function SellerOrders() {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const getOrders = async () => {
      await getDataFromEndpoint(`/sales/seller/${user.id}`, setOrders);
    };
    getOrders();
  }, [user.id]);

  return (
    <div>
      <NavBar showProducts={ false } showOrders />
      {orders.map((order, i) => (
        <OrderCard
          key={ i }
          id={ order.id }
          loopIndex={ i }
          role={ user.role }
          saleDate={ order.saleDate }
          status={ order.status }
          totalPrice={ order.totalPrice }
        />
      ))}
    </div>
  );
}

export default SellerOrders;

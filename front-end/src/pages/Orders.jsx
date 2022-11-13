import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import OrderCard from '../components/OrderCard';
import getDataFromEndpoint from '../utils/getDataFromEndpoint';

function Orders() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getUserSales = async () => {
      await getDataFromEndpoint(`/sales/customer/${user.id}`, setSales);
    };
    getUserSales();
  }, [user.id]);

  return (
    <div>
      <NavBar showProducts showOrders />
      {sales.map((sale, i) => (
        <OrderCard
          key={ sale.id }
          id={ sale.id }
          status={ sale.status }
          saleDate={ sale.saleDate }
          totalPrice={ sale.totalPrice }
          role={ user.role }
          loopIndex={ i }
        />
      ))}
    </div>
  );
}

export default Orders;

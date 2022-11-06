import { useState, useEffect } from 'react';
import OrderCard from '../../components/OrderCard';

function Orders() {
  const { role } = JSON.parse(localStorage.getItem('user'));
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getUserSales = async () => {
      const { id } = JSON.parse(localStorage.getItem('user'));
      const response = await fetch(`http://localhost:3001/sales/customer/${id}`);
      const data = await response.json();
      setSales(data);
    };
    getUserSales();
  }, []);

  return (
    <div>
      {sales.map((sale, i) => (
        <OrderCard
          key={ sale.id }
          id={ sale.id }
          status={ sale.status }
          saleDate={ sale.saleDate }
          totalPrice={ sale.totalPrice }
          role={ role }
          loopIndex={ i }
        />
      ))}
    </div>
  );
}

export default Orders;

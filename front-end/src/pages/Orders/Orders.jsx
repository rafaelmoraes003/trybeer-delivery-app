import { useState, useEffect } from 'react';
import NavBar from '../../components/Navbar/NavBar';
import OrderCard from '../../components/OrderCard/OrderCard';
import getDataFromEndpoint from '../../utils/getDataFromEndpoint';

import * as S from './styled';

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
    <>
      <NavBar showProducts showOrders />
      <S.Container>
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
      </S.Container>
    </>
  );
}

export default Orders;

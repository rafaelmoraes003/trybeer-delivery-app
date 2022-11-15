import { useEffect, useState } from 'react';
import NavBar from '../../components/Navbar/NavBar';
import OrderCard from '../../components/OrderCard/OrderCard';
import getDataFromEndpoint from '../../utils/getDataFromEndpoint';

import * as S from './styled';

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
    <>
      <NavBar showProducts={ false } showOrders />
      <S.Container>
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
      </S.Container>
    </>
  );
}

export default SellerOrders;

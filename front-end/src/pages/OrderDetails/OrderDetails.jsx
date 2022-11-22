import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/Navbar/NavBar';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
import OrderTable from '../../components/OrderTable/OrderTable';
import getDataFromEndpoint from '../../utils/getDataFromEndpoint';

import * as S from './styled';

function OrderDetails() {
  const [orderDetails, setOrderDetails] = useState({});
  const { role } = JSON.parse(localStorage.getItem('user'));
  const { id: saleId } = useParams();

  useEffect(() => {
    const getOrder = async () => {
      await getDataFromEndpoint(`/sales/${saleId}?showProducts=true`, setOrderDetails);
    };
    getOrder();

    return () => {
      setOrderDetails({});
    };
  }, [saleId]);

  return (
    <>
      <NavBar showProducts showOrders />
      <S.Main>
        <h1>Detalhe do Pedido</h1>
        {Object.keys(orderDetails).length && (
          <S.Container>
            <OrderInfo
              id={ orderDetails.id }
              seller={ orderDetails.seller.name }
              saleDate={ orderDetails.saleDate }
              status={ orderDetails.status }
            />

            <OrderTable
              productsList={ orderDetails.products }
              role={ role }
            />
          </S.Container>
        )}
      </S.Main>
    </>
  );
}

export default OrderDetails;

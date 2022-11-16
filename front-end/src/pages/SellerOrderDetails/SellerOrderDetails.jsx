import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/Navbar/NavBar';
import OrderTable from '../../components/OrderTable/OrderTable';
import SellerInfo from '../../components/SellerInfo/SellerInfo';
import getDataFromEndpoint from '../../utils/getDataFromEndpoint';

import * as S from './styled';

function SellerOrderDetails() {
  const [order, setOrder] = useState({});
  const { role } = JSON.parse(localStorage.getItem('user'));
  const { id: saleId } = useParams();

  useEffect(() => {
    const getOrders = async () => {
      await getDataFromEndpoint(`/sales/${saleId}?showProducts=true`, setOrder);
    };
    getOrders();

    return () => {
      setOrder({});
    };
  }, [saleId]);

  return (
    <>
      <NavBar showProducts={ false } showOrders />
      <S.Main>
        <h1>Detalhe do Pedido</h1>
        {Object.keys(order).length && (
          <S.Container>
            <SellerInfo
              id={ order.id }
              saleDate={ order.saleDate }
              status={ order.status }
            />
            <OrderTable
              productsList={ order.products }
              role={ role }
            />
          </S.Container>
        )}
      </S.Main>
    </>
  );
}

export default SellerOrderDetails;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import OrderInfo from '../../components/OrderInfo/index';
import OrderTable from '../../components/OrderTable/index';
import getDataFromEndpoint from '../../utils/getDataFromEndpoint';

function DetailsOrder() {
  const [orderDetails, setOrderDetails] = useState({});
  const { role } = JSON.parse(localStorage.getItem('user'));
  const { id: saleId } = useParams();

  useEffect(() => {
    const getOrder = async () => {
      await getDataFromEndpoint(`/sales/${saleId}?showProducts=true`, setOrderDetails);
    };
    getOrder();
  }, [saleId]);

  return (
    <main>
      <NavBar showProducts showOrders />
      {Object.keys(orderDetails).length && (
        <>
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
        </>
      )}
    </main>
  );
}

export default DetailsOrder;

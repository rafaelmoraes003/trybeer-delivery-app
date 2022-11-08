import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import OrderInfo from '../../components/OrderInfo/index';
import OrderTable from '../../components/OrderTable/index';
import getOrderDetails from '../../utils/getOrderDetails';

function DetailsOrder() {
  const [orderDetails, setOrderDetails] = useState({});
  const { id: saleId } = useParams();

  useEffect(() => {
    const getOrder = async () => {
      await getOrderDetails('sales', saleId, setOrderDetails);
    };
    getOrder();
  }, [saleId]);

  return (
    <main>
      <NavBar showProducts />
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
          />
        </>
      )}
    </main>
  );
}

export default DetailsOrder;

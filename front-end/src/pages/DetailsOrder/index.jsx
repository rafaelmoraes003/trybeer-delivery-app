import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import OrderInfo from '../../components/OrderInfo/index';
import OrderTable from '../../components/OrderTable/index';
import getOrderDetails from '../../utils/getOrderDetails';

function DetailsOrder() {
  const [orderDetails, setOrderDetails] = useState({});
  const [salesProducts, setSalesProducts] = useState([]);
  const { id: orderId } = useParams();

  useEffect(() => {
    const getOrder = async () => {
      await getOrderDetails('sales', orderId, setOrderDetails);
      await getOrderDetails('sales-products', orderId, setSalesProducts);
    };
    getOrder();
  }, [orderId]);

  return (
    <main>
      <NavBar showProducts />
      {orderDetails && salesProducts.length && (
        <>
          <OrderInfo
            id={ orderDetails.id }
            seller={ orderDetails.seller.name }
            saleDate={ orderDetails.saleDate }
            status={ orderDetails.status }
          />

          <OrderTable
            productsList={ salesProducts }
          />
        </>
      )}
    </main>
  );
}

export default DetailsOrder;

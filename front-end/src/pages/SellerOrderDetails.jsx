import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import OrderTable from '../components/OrderTable';
import SellerInfo from '../components/SellerInfo';
import getDataFromEndpoint from '../utils/getDataFromEndpoint';

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
    <div>
      <NavBar showProducts={ false } showOrders />
      {Object.keys(order).length && (
        <>
          <SellerInfo
            id={ order.id }
            saleDate={ order.saleDate }
            status={ order.status }
          />
          <OrderTable
            productsList={ order.products }
            role={ role }
          />
        </>
      )}
    </div>
  );
}

export default SellerOrderDetails;

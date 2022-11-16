import PropTypes from 'prop-types';
import { useState } from 'react';
import getTypeColor from '../../utils/getTypeColor';

import * as S from './styled';

function OrderInfo({ id, seller, saleDate, status }) {
  const [orderStatus, setOrderStatus] = useState(status);

  const changeStatusClick = async (newStatus) => {
    setOrderStatus(newStatus);
    await fetch(`http://localhost:3001/sales/${id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        status: newStatus,
      }),
    });
  };

  const index = 1;
  return (
    <S.Container>
      <S.OrderNumber>
        <p data-testid="customer_order_details__element-order-details-label-order-id">
          {`Pedido ${String(id).padStart(2 + 1, 0)}`}
        </p>
      </S.OrderNumber>
      <S.OrderName>
        <p data-testid="customer_order_details__element-order-details-label-seller-name">
          { `P. Vend: ${seller}` }
        </p>
      </S.OrderName>
      <S.Date>
        <p data-testid="customer_order_details__element-order-details-label-order-date">
          { new Date(saleDate).toLocaleDateString('pt-BR') }
        </p>
      </S.Date>
      <S.Status>
        <p
          style={ { background: getTypeColor(status), height: '60px' } }
          data-testid={
            `customer_order_details__element-order-details-label-delivery-status${index}`
          }
        >
          { orderStatus }
        </p>
      </S.Status>

      <S.Button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled={ orderStatus !== 'Em Trânsito' }
        onClick={ () => changeStatusClick('Entregue') }
      >
        Marcar como entregue
      </S.Button>
    </S.Container>

  );
}

OrderInfo.propTypes = {
  id: PropTypes.number.isRequired,
  seller: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default OrderInfo;

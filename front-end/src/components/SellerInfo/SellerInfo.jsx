import PropTypes from 'prop-types';
import { useState } from 'react';
import getTypeColor from '../../utils/getTypeColor';

import * as S from './styled';

function SellerInfo({ id, saleDate, status }) {
  const [orderStatus, setOrderStatus] = useState(status);

  const ChangePrepare = () => orderStatus === 'Pendente';
  const ChangeDelivery = () => orderStatus === 'Preparando';

  const ChangeStatusClick = async (newStatus) => {
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

  return (
    <S.Container>
      <S.OrderNumber>
        <p data-testid="seller_order_details__element-order-details-label-order-id">
          {`Pedido ${String(id).padStart(2 + 1, 0)}`}
        </p>
      </S.OrderNumber>
      <S.Date>
        <p data-testid="seller_order_details__element-order-details-label-order-date">
          { new Date(saleDate).toLocaleDateString('pt-BR') }
        </p>
      </S.Date>
      <S.Status>
        <p
          style={ { background: getTypeColor(status), height: '60px' } }
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          { orderStatus }
        </p>
      </S.Status>
      <S.Button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
        onClick={ () => ChangeStatusClick('Preparando') }
        disabled={ !ChangePrepare() }
      >
        Preparar Pedido
      </S.Button>

      <S.ButtonTwo
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        onClick={ () => ChangeStatusClick('Em Trânsito') }
        disabled={ !ChangeDelivery() }
      >
        Saiu para Entrega
      </S.ButtonTwo>
    </S.Container>

  );
}

SellerInfo.propTypes = {
  id: PropTypes.number.isRequired,
  saleDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default SellerInfo;

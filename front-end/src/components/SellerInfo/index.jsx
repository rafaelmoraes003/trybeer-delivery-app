import PropTypes from 'prop-types';
import { useState } from 'react';

function SellerInfo({ id, saleDate, status }) {
  const [orderStatus, setOrderStatus] = useState(status);

  const ChangePrepare = () => {
    if (orderStatus === 'Pendente') return false;
    if (orderStatus !== 'Pendente') return true;
  };

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

  const ChangeDelivery = () => {
    if (orderStatus === 'Preparando') return false;
    if (orderStatus !== 'Preparando') return true;
  };

  return (
    <div>
      <p data-testid="seller_order_details__element-order-details-label-order-id">
        {`Pedido ${String(id).padStart(2 + 1, 0)}`}
      </p>
      <p data-testid="seller_order_details__element-order-details-label-order-date">
        { new Date(saleDate).toLocaleDateString('pt-BR') }
      </p>
      <p
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        { orderStatus }
      </p>
      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
        onClick={ () => ChangeStatusClick('Preparando') }
        disabled={ ChangePrepare() }
      >
        Preparar Pedido
      </button>

      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        onClick={ () => ChangeStatusClick('Em Trânsito') }
        disabled={ ChangeDelivery() }
      >
        Saiu para Entrega
      </button>
    </div>

  );
}

SellerInfo.propTypes = {
  id: PropTypes.number.isRequired,
  saleDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default SellerInfo;

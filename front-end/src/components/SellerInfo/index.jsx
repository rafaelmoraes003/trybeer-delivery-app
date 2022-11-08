import PropTypes from 'prop-types';

function SellerInfo({ id, saleDate, status }) {
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
        { status }
      </p>
      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
      >
        Preparar Pedido
      </button>

      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        disabled
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

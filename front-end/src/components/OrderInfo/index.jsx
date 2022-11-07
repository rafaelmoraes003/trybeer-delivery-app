import PropTypes from 'prop-types';

function OrderInfo({ id, seller, saleDate, status }) {
  const index = 1;
  return (
    <div>
      <p data-testid="customer_order_details__element-order-details-label-order-id">
        {`Pedido ${String(id).padStart(2 + 1, 0)}`}
      </p>
      <p data-testid="customer_order_details__element-order-details-label-seller-name">
        { seller }
      </p>
      <p data-testid="customer_order_details__element-order-details-label-order-date">
        { new Date(saleDate).toLocaleDateString('pt-BR') }
      </p>
      <p
        data-testid={
          `customer_order_details__element-order-details-label-delivery-status${index}`
        }
      >
        { status }
      </p>

      <button
        type="button"
        // data-testid="customer_order_details__button-delivery-check"
        data-testid="customer_order_details__button-delivery-check"
        disabled
      >
        Marcar como entregue
      </button>
    </div>

  );
}

OrderInfo.propTypes = {
  id: PropTypes.number.isRequired,
  seller: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default OrderInfo;

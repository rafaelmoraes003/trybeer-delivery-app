import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OrderCard({ id, status, saleDate, totalPrice, role, loopIndex }) {
  return (
    <Link to={ `/${role}/orders/${id}` }>
      <div
        style={ { border: '2px solid black', width: 250, marginTop: 20 } }
      >
        <h3
          data-testid={ `${role}_orders__element-order-id-${id}` }
        >
          {`Pedido ${loopIndex + 1}`}
        </h3>
        <h3
          data-testid={ `${role}_orders__element-order-date-${id}` }
        >
          {new Date(saleDate).toLocaleDateString('pt-BR')}
        </h3>
        <h3
          data-testid={ `${role}_orders__element-delivery-status-${id}` }
        >
          {status}
        </h3>
        <h3
          data-testid={ `${role}_orders__element-card-price-${id}` }
        >
          {totalPrice.replace('.', ',')}
        </h3>
      </div>
    </Link>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  loopIndex: PropTypes.number.isRequired,
};

export default OrderCard;

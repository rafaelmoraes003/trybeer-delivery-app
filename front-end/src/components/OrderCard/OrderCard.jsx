import PropTypes from 'prop-types';
import getTypeColor from '../../utils/getTypeColor';
// import { Link } from 'react-router-dom';

import * as S from './styled';

function OrderCard({ id, status, saleDate, totalPrice, role, loopIndex }) {
  return (
    <S.Container>
      <S.ContainerLink to={ `/${role}/orders/${id}` }>
        <S.CardInfo>
          <S.OrderNumber>
            <h3
              data-testid={ `${role}_orders__element-order-id-${id}` }
            >
              {`Pedido ${loopIndex + 1}`}
            </h3>
          </S.OrderNumber>
          <S.ButtonStatus
            style={ { background: getTypeColor(status) } }
            type={ status }
            data-testid={ `${role}_orders__element-delivery-status-${id}` }
          >
            {status}
          </S.ButtonStatus>
          <S.DatePrice>
            <S.Date
              data-testid={ `${role}_orders__element-order-date-${id}` }
            >
              {new Date(saleDate).toLocaleDateString('pt-BR')}
            </S.Date>
            <S.Price
              data-testid={ `${role}_orders__element-card-price-${id}` }
            >
              {`R$ ${totalPrice.replace('.', ',')}`}
            </S.Price>
          </S.DatePrice>
        </S.CardInfo>
      </S.ContainerLink>
    </S.Container>
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

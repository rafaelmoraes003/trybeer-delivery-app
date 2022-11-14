import PropTypes from 'prop-types';

import * as S from './styled';

function ProductCard({
  id, name, price, urlImage, quantity, incrementFunc, decrementFunc, onChange,
}) {
  return (
    <S.Container>
      <S.Price data-testid={ `customer_products__element-card-price-${id}` }>
        {`R$ ${price.replace('.', ',')}`}
      </S.Price>
      <S.Image>
        <img
          src={ urlImage }
          alt={ name }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
      </S.Image>
      <S.Title
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}
      </S.Title>
      <S.WrapperItem>
        <S.IncrementButton
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          onClick={ () => incrementFunc(id) }
        >
          +
        </S.IncrementButton>
        <S.Label>
          <S.Input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            id={ id }
            value={ quantity }
            onChange={ onChange }
          />
        </S.Label>
        <S.DecrementButton
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          onClick={ () => decrementFunc(id) }
        >
          -
        </S.DecrementButton>
      </S.WrapperItem>
    </S.Container>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  incrementFunc: PropTypes.func.isRequired,
  decrementFunc: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ProductCard;

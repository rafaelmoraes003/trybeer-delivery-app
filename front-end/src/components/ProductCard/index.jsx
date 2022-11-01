import PropTypes from 'prop-types';

function ProductCard({
  id, name, price, urlImage, quantity, incrementFunc, decrementFunc, onChange,
}) {
  return (
    <div>
      <div>
        <img
          src={ urlImage }
          alt={ name }
          style={ { width: 220 } }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
        <h2 data-testid={ `customer_products__element-card-title-${id}` }>{name}</h2>
        <h3 data-testid={ `customer_products__element-card-price-${id}` }>
          {price.replace('.', ',')}
        </h3>
      </div>
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        onClick={ () => incrementFunc(id) }
      >
        +
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        id={ id }
        value={ quantity }
        onChange={ onChange }
      />
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        onClick={ () => decrementFunc(id) }
      >
        -
      </button>
    </div>
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

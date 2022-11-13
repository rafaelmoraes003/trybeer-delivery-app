import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function OrderTable({ productsList, role }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const price = productsList
      .reduce((acc, curr) => (Number(curr.price) * curr.SaleProduct.quantity) + acc, 0);
    setTotalPrice(price);
  }, [productsList]);

  return (
    <div>
      <h1>Detalhe do Pedido</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>SubTotal</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((item, i) => (
            <tr key={ i }>
              <td
                data-testid={
                  `${role}_order_details__element-order-table-item-number-${i}`
                }
              >
                {i + 1}
              </td>
              <td
                data-testid={ `${role}_order_details__element-order-table-name-${i}` }
              >
                {item.name}
              </td>
              <td
                data-testid={
                  `${role}_order_details__element-order-table-quantity-${i}`
                }
              >
                {item.SaleProduct.quantity}
              </td>
              <td
                data-testid={
                  `${role}_order_details__element-order-table-unit-price-${i}`
                }
              >
                {String(item.price).replace('.', ',')}
              </td>
              <td
                data-testid={
                  `${role}_order_details__element-order-table-sub-total-${i}`
                }
              >
                {
                  (Number(item.price) * item.SaleProduct.quantity)
                    .toFixed(2).replace('.', ',')
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p data-testid={ `${role}_order_details__element-order-total-price` }>
        {`Total: R$ ${Number(totalPrice).toFixed(2).replace('.', ',')}`}
      </p>
    </div>
  );
}

OrderTable.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    SaleProduct: PropTypes.shape({
      quantity: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
  role: PropTypes.string.isRequired,
};

export default OrderTable;

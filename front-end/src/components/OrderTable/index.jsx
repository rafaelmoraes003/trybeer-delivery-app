import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function OrderTable({ productsList }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const price = productsList
      .reduce((acc, curr) => (Number(curr.productPrice) * curr.quantity) + acc, 0);
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
                  `customer_order_details__element-order-table-item-number-${i}`
                }
              >
                {i + 1}
              </td>
              <td
                data-testid={ `customer_order_details__element-order-table-name-${i}` }
              >
                {item.productName}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-quantity-${i}`
                }
              >
                {item.quantity}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-unit-price-${i}`
                }
              >
                {String(item.productPrice).replace('.', ',')}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-sub-total-${i}`
                }
              >
                {(Number(item.productPrice) * item.quantity).toFixed(2).replace('.', ',')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p data-testid="customer_order_details__element-order-total-price">
        {`Total: R$ ${Number(totalPrice).toFixed(2).replace('.', ',')}`}
      </p>
    </div>
  );
}

OrderTable.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.shape({
    saleId: PropTypes.number.isRequired,
    productId: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.string.isRequired,
  })).isRequired,
};

export default OrderTable;

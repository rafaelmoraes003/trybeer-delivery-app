import React from 'react';

function OrderTable() {
  const i = 1;
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
          {/* {products.map((item, i) => ( */}
          <tr>
            <td
              data-testid={
                `customer_order_details__element-order-table-item-number-${i}`
              }
            >
              {/* {i + 1} */}
            </td>
            <td
              data-testid={ `customer_order_details__element-order-table-name-${i}` }
            >
              {/* {item.name} */}
            </td>
            <td
              data-testid={ `customer_order_details__element-order-table-quantity-${i}` }
            >
              {/* {item.quantity} */}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-unit-price-${i}`
              }
            >
              {/* {(item.price).replace('.', ',')} */}
            </td>
            <td
              data-testid={ `customer_order_details__element-order-table-sub-total-${i}` }
            >
              {/* {(Number(item.price) * item.quantity).toFixed(2).replace('.', ',')} */}
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>

      <p data-testid="customer_order_details__element-order-total-price">
        Total: R$
      </p>
    </div>
  );
}

export default OrderTable;

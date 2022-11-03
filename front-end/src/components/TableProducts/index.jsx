import React, { useState, useEffect } from 'react';

function TableProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem('cart'));
    setProducts(cartProducts);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>SubTotal</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item, i) => (
          <tr key={ i }>
            <td
              data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
            >
              {i + 1}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${i}` }
            >
              {item.name}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
            >
              {item.quantity}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
            >
              {(item.price).replace('.', ',')}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
            >
              {(Number(item.price) * item.quantity).toFixed(2).replace('.', ',')}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-remove-${i}` }
            >
              <button type="button">Remover</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableProducts;

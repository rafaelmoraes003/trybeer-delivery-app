import React, { useState } from 'react';

function TableProducts() {
  const [products, setProducts] = useState([]);
  return (
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
        {products?.map((item, index) => (
          <tr key={ index }>
            <td
              data-testid={ `customer_checkout__element-order-table-item-number${index}` }
            >
              {index + 1}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name${index}` }
            >
              {item}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableProducts;

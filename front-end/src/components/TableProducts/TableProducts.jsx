import React, { useState, useEffect } from 'react';
import getTotalPrice from '../../utils/getTotalPrice';

import * as S from './styled';

function TableProducts() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState('00,00');
  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem('cart'));
    setProducts(cartProducts);
  }, []);

  useEffect(() => {
    const price = getTotalPrice();
    setTotalPrice(price);
  }, [products]);

  function removeItem(productId) {
    const newCart = products.filter((item) => item.id !== Number(productId));
    localStorage.setItem('cart', JSON.stringify(newCart));
    setProducts(newCart);
  }
  return (
    <S.Main>
      <h1>Finalizar Pedido</h1>
      <S.Table>
        <thead>
          <S.TableRow>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>SubTotal</th>
            <th>Remover Item</th>
          </S.TableRow>
        </thead>
        <tbody>
          {products.map((item, i) => (
            <S.TableRow key={ i }>
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
                <S.Button
                  type="button"
                  id={ item.id }
                  onClick={ (e) => removeItem(e.target.id) }
                >
                  Remover
                </S.Button>
              </td>
            </S.TableRow>
          ))}
        </tbody>
        <S.Total
          data-testid="customer_checkout__element-order-total-price"
        >
          Total: R$
          {Number(totalPrice).toFixed(2).replace('.', ',')}
        </S.Total>
      </S.Table>
    </S.Main>
  );
}

export default TableProducts;

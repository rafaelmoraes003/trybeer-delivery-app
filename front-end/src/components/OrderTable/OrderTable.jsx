import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import * as S from './styled';

function OrderTable({ productsList, role }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const price = productsList
      .reduce((acc, curr) => (Number(curr.price) * curr.SaleProduct.quantity) + acc, 0);
    setTotalPrice(price);
  }, [productsList]);

  return (
    <S.Main>
      <S.Table>
        <thead>
          <S.TableRow>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>SubTotal</th>
          </S.TableRow>
        </thead>
        <tbody>
          {productsList.map((item, i) => (
            <S.TableRow key={ i }>
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
            </S.TableRow>
          ))}
        </tbody>
      </S.Table>

      <S.PriceTotal data-testid={ `${role}_order_details__element-order-total-price` }>
        {`Total: R$ ${Number(totalPrice).toFixed(2).replace('.', ',')}`}
      </S.PriceTotal>
    </S.Main>
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

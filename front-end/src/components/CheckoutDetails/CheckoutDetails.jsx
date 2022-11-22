import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import createSaleProductRequest from '../../utils/createSaleProductRequest';
import createSaleRequest from '../../utils/createSaleRequest';
import getToast from '../../utils/getToast';
import getTotalPrice from '../../utils/getTotalPrice';
import InputWithLabel from '../InputLabel/InputWithLabel';

import * as S from './styled';

function CheckoutDetails() {
  const navigateTo = useNavigate();
  const [sellers, setSellers] = useState([]);
  const [sellerId, setSellerId] = useState(null);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const getSellers = async () => {
      const response = await fetch('http://localhost:3001/users/sellers');
      const data = await response.json();
      setSellers(data);
      setSellerId(data[0].id);
    };
    getSellers();

    return () => {
      setSellers([]);
      setSellerId(null);
    };
  }, []);

  const createSale = async () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const totalPrice = getTotalPrice();

    const body = await createSaleRequest({
      userData, totalPrice, address, number, sellerId,
    });
    if (body.error) {
      getToast('error', 'Algo deu errado.');
    } else {
      await createSaleProductRequest(body.id);
      navigateTo(`/customer/orders/${body.id}`);
    }
  };

  return (
    <S.Container>
      <h1>Detalhes e Endereço para a Entrega</h1>
      <S.Form>
        <S.Label htmlFor="sellers">
          P. Vendedora Responsável
          <S.Select
            id="sellers"
            data-testid="customer_checkout__select-seller"
            onChange={ (e) => setSellerId(e.target.value) }
          >
            {sellers.map((seller) => (
              <option
                key={ seller.id }
                value={ seller.id }
              >
                {seller.name}
              </option>
            ))}
          </S.Select>
        </S.Label>
        <S.InputAdddres>
          <InputWithLabel
            labelText="Endereço"
            type="text"
            testId="customer_checkout__input-address"
            onChange={ setAddress }
          />
        </S.InputAdddres>
        <S.InputNumber>
          <InputWithLabel
            labelText="Número"
            type="number"
            testId="customer_checkout__input-address-number"
            onChange={ setNumber }
          />
        </S.InputNumber>
      </S.Form>

      <S.Button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ createSale }
      >
        Finalizar Pedido
      </S.Button>

      <div data-testid="customer_checkout__error-message">
        <ToastContainer />
      </div>
    </S.Container>
  );
}

export default CheckoutDetails;

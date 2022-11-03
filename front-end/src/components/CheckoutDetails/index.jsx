import { useEffect, useState } from 'react';
import InputWithLabel from '../InputWithLabel/index';

function CheckoutDetails() {
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const getSellers = async () => {
      const response = await fetch('http://localhost:3001/users/sellers');
      const data = await response.json();
      setSellers(data);
    };
    getSellers();
  }, []);

  console.log(address, number);

  return (
    <div>
      <h1>Detalhes e Endereço para a Entrega</h1>
      <div>
        <label htmlFor="sellers">
          Pessoa Vendedora Responsável
          <select
            id="sellers"
            data-testid="customer_checkout__select-seller"
          >
            {sellers.map((seller) => (
              <option
                key={ seller.id }
                value={ seller.id }
              >
                {seller.name}
              </option>
            ))}
          </select>
        </label>

        <InputWithLabel
          labelText="Endereço"
          type="text"
          testId="customer_checkout__input-address"
          onChange={ (e) => setAddress(e.target.value) }
        />

        <InputWithLabel
          labelText="Número"
          type="number"
          testId="customer_checkout__input-address-number"
          onChange={ (e) => setNumber(Number(e.target.value)) }
        />

        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}

export default CheckoutDetails;

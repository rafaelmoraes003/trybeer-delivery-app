import { useEffect, useState } from 'react';
import getTotalPrice from '../../utils/getTotalPrice';

function TotalPrice() {
  const [totalPrice, setTotalPrice] = useState('00,00');

  useEffect(() => {
    const price = getTotalPrice();
    setTotalPrice(price);
  }, []);

  return (
    <h2
      data-testid="customer_checkout__element-order-total-price"
    >
      {Number(totalPrice).toFixed(2).replace('.', ',')}
    </h2>
  );
}

export default TotalPrice;

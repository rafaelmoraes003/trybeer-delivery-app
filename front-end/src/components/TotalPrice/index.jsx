import { useEffect, useState } from 'react';

function TotalPrice() {
  const [totalPrice, setTotalPrice] = useState('00,00');

  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem('cart'));
    const price = cartProducts
      .reduce((acc, curr) => (Number(curr.price) * curr.quantity) + acc, 0);
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

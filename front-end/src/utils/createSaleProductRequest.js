const createSaleProductRequest = async (saleId) => {
  const sales = JSON.parse(localStorage.getItem('cart')).map((i) => (
    { saleId, productId: i.id, quantity: i.quantity }
  ));

  await fetch('http://localhost:3001/sales-products', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(sales),
  });
};

export default createSaleProductRequest;

const createSaleRequest = async ({ userData, sellerId, totalPrice, address, number }) => {
  const response = await fetch('http://localhost:3001/sales', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: userData.token,
    }),
    body: JSON.stringify({
      userId: userData.id,
      sellerId,
      totalPrice,
      deliveryAddress: address,
      deliveryNumber: number,
      saleDate: new Date(),
      status: 'Pendente',
    }),
  });

  const body = await response.json();
  return body;
};

export default createSaleRequest;

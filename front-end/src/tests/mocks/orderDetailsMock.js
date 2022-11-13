const orderDetailsMock = (saleStatus) => ({
  id: 1,
  userId: 3,
  sellerId: 2,
  totalPrice: '8.80',
  deliveryAddress: 'Rua Praia Vermelha',
  deliveryNumber: '89',
  saleDate: '2022-11-13T03:25:00.000Z',
  status: saleStatus,
  user: {
    name: 'Rafael Moraes',
  },
  seller: {
    name: 'Fulana Pereira',
  },
  products: [
    {
      id: 1,
      name: 'Skol Lata 250ml',
      price: '2.20',
      SaleProduct: {
        quantity: 4,
      },
    },
  ],
});

export default orderDetailsMock;

const getTotalPrice = () => {
  const totalPrice = JSON.parse(localStorage.getItem('cart'))
    .reduce((acc, curr) => (Number(curr.price) * curr.quantity) + acc, 0);

  return totalPrice;
};

export default getTotalPrice;

const getOrderDetails = async (endpoint, orderId, setState) => {
  const response = await
  fetch(`http://localhost:3001/${endpoint}/${orderId}`);
  const data = await response.json();
  setState(data);
};

export default getOrderDetails;

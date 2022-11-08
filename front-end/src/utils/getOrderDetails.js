const getOrderDetails = async (endpoint, id, setState) => {
  const response = await
  fetch(`http://localhost:3001/${endpoint}/${id}?showProducts=true`);
  const data = await response.json();
  setState(data);
};

export default getOrderDetails;

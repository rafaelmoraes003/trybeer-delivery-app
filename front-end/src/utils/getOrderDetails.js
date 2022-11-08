const getOrderDetails = async (endpoint, id, setState) => {
  const response = await
  fetch(`http://localhost:3001/${endpoint}/${id}`);
  const data = await response.json();
  setState(data);
};

export default getOrderDetails;

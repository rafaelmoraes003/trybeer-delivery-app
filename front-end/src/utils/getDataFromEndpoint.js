const getDataFromEndpoint = async (endpoint, setState) => {
  const response = await
  fetch(`http://localhost:3001${endpoint}`);
  const data = await response.json();
  setState(data);
};

export default getDataFromEndpoint;

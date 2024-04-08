// Import from the env 
const api_url = process.env.REACT_APP_API_URL;

// A function to send post request to create a new order
const createOrder = async (orderData, token) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
    },
    body: JSON.stringify(orderData)
  };
  const response = await fetch(`${api_url}/api/orders`, requestOptions);
  return response;
}

// A function to send get request to get all new orders
const getAllOrders = async (token) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
    }
  };
  const response = await fetch(`${api_url}/api/orders`, requestOptions);
  return response;
}

// Export all the functions 
const orderService = {
  createOrder,
  getAllOrders
}
export default orderService;

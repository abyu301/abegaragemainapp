// Import from the env
const api_url = process.env.REACT_APP_API_URL;

// A function to send post request to create a new customer
async function createCustomer(formData, loggedInEmployeeToken) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': loggedInEmployeeToken
    },
    body: JSON.stringify(formData)
  };
  console.log(requestOptions);
  
  const response = await fetch(`${api_url}/api/customer`, requestOptions);
  return response;
}

// A function to send get request to get all customers
async function getAllCustomers(loggedInEmployeeToken) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': loggedInEmployeeToken
    }
  };
  const response = await fetch(`${api_url}/api/customers`, requestOptions);
  return response.json();
}

const customerService = {
  createCustomer,
  getAllCustomers,
};

export default customerService;

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
  
  const response = await fetch(`${api_url}/api/customer`, requestOptions);
  const data = await response.json();
  return data;
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
  const data = await response;
  return data;
}

// A function to update a customer
async function updateCustomer(formData, loggedInEmployeeToken) {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': loggedInEmployeeToken
    },
    body: JSON.stringify(formData)
  };
  const response = await fetch(`${api_url}/api/customer/update`, requestOptions);
  const data = await response.json();
  return data;
}

// A function to get single customer
async function singleCustomer(formData, loggedInEmployeeToken) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': loggedInEmployeeToken
    }
  };
  const response = await fetch(`${api_url}/api/customer/single/${formData}`, requestOptions);
  const data = await response.json();
  return data;
}

// A function to find a customer
async function findCustomer(formData, loggedInEmployeeToken) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': loggedInEmployeeToken
    }
  };
  const response = await fetch(`${api_url}/api/customer/find?query=${formData}`, requestOptions);
  const data = await response.json();
  return data;
}

const customerService = {
  createCustomer,
  getAllCustomers,
  updateCustomer,
  singleCustomer,
  findCustomer,
};

export default customerService;

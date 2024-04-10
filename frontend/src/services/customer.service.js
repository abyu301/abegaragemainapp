// const api_url = process.env.REACT_APP_API_URL;

// const createCustomer = async (formData) => {
//     const requestOptions = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(formData)
//     };
//     console.log(requestOptions);
//   const response = await fetch(`${api_url}/api/customers`, requestOptions); // Assuming API endpoint for creating customers is /api/customers
//     return response;
// }

// // Export the function(s)
// const customerService = {
//     createCustomer
// };

// export default customerService;





// Import from the env 
const api_url = process.env.REACT_APP_API_URL;

// Function to send a POST request to create a new customer
const createCustomer = async (formData, token) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token // Include the authentication token in the headers
    },
    body: JSON.stringify(formData)
  };

  try {
    const response = await fetch(`${api_url}/api/customers`, requestOptions);
    return response;
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
};

const customerService = {
  createCustomer
};

export default customerService;

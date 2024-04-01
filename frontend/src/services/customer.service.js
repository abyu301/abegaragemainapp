const api_url = process.env.REACT_APP_API_URL;

const createCustomer = async (formData) => {
    const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
    };
    console.log(requestOptions);
  const response = await fetch(`${api_url}/api/customers`, requestOptions); // Assuming API endpoint for creating customers is /api/customers
    return response;
}

// Export the function(s)
const customerService = {
    createCustomer
};

export default customerService;

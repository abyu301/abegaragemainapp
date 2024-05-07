const api_url = process.env.REACT_APP_API_URL;

async function addOrder(formData, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  const data = await fetch(`${api_url}/api/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(formData),
  });

  return data;
}

async function getAllOrder(loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  const data = await fetch(`${api_url}/api/orders`, {
    headers,
  });

  return data;
}

async function getSingleOrder(formData) {
  const data = await fetch(`${api_url}/api/order/single/${formData}`);
  
  return data;
}

async function updateOrder(formData, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  const data = await fetch(`${api_url}/api/order/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(formData),
  });

  return data;
}

async function customerOrders(formData, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  const data = await fetch(`${api_url}/api/order/customer/${formData}`, {
    headers,
  });

  return data;
}

const Order = {
  addOrder,
  getAllOrder,
  getSingleOrder,
  updateOrder,
  customerOrders,
};

export default Order;

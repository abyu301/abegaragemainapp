const api_url = process.env.REACT_APP_API_URL;

async function addVehicle(formData, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: formData
  };
  const response = await fetch(`${api_url}/api/vehicle`, requestOptions);
  return response;
}

async function getCustomerVehicle(formData, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const requestOptions = {
    method: 'GET',
    headers: headers
  };
  const response = await fetch(`${api_url}/api/vehicle/customer?query=${formData}`, requestOptions);
  return response;
}

async function getSingleVehicle(customer_hash, vehicle_id, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const requestOptions = {
    method: 'GET',
    headers: headers
  };
  const response = await fetch(`${api_url}/api/vehicle/single/${customer_hash}/${vehicle_id}`, requestOptions);
  return response;
}

const vehicleService = {
  addVehicle,
  getCustomerVehicle,
  getSingleVehicle,
};

export default vehicleService;

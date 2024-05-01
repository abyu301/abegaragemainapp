const api_url = process.env.REACT_APP_API_URL;

async function addService(formData, loggedInEmployeeToken) {

  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  const data = await api_url.post("/api/service", formData, { headers });

  return data;
}

async function getAllServices(loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await api_url.get("/api/services", { headers });
  // console.log(data)

  return data;
}

async function updateService(formData, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  const data = await api_url.put("/api/service/update", formData, { headers });

  return data;
}


async function singleService(formData, loggedInEmployeeToken) {
    const headers = {
      "x-access-token": loggedInEmployeeToken,
    };
    const data = await api_url.get(`/api/service/single/${formData}`, { headers });
  
  
    return data;
  }

const SERVICE = {
  addService,
  getAllServices,
  updateService,
  singleService
};

export default SERVICE;

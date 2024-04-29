import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../Contexts/AuthContext";
import CustomerInfo from "../CustomerInformation/CustomerInfo";
import CustomerVehicle from "../CustomerInformation/CustomerVehicle";
import CustomerOrders from "../CustomerInformation/CustomerOrders";

function CustomerProfile({ customerService, vehicleService, orderService }) {
  const { customer_hash } = useParams();
  const [customer, setCustomer] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [orders, setOrders] = useState([]);
  const [vehicleError, setVehicleError] = useState("");
  const [orderError, setOrderError] = useState("");
  const [loadingVehicle, setLoadingVehicle] = useState(false);
  const [loadingOrder, setLoadingOrder] = useState(false);

  const { employee } = useAuth();
  const loggedInEmployeeToken = employee?.employee_token || "";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const customerData = await customerService?.singleCustomer(customer_hash, loggedInEmployeeToken);
      if (customerData?.status === 200) {
        setCustomer(customerData.data.singleCustomer[0]);
      }

      const vehicleData = await vehicleService.getCustomerVehicle(customer_hash, loggedInEmployeeToken);
      if (vehicleData?.status === 200) {
        setVehicles(vehicleData.data.customerVehicle);
        setLoadingVehicle(false);
      } else {
        setVehicles([]);
        setVehicleError(vehicleData?.response?.data?.error || "An error occurred while fetching vehicle data");
        setLoadingVehicle(false);
      }

      const orderData = await orderService.customerOrders(customer_hash, loggedInEmployeeToken);
      if (orderData?.status === 200) {
        setOrders(orderData.data.customerOrder);
        setLoadingOrder(false);
      } else {
        setOrders([]);
        setOrderError(orderData?.response?.data?.error || "An error occurred while fetching order data");
        setLoadingOrder(false);
      }
    } catch (error) {
      // Handle error
    }
  };

  const handleEdit = (id) => {
    // Handle edit
  };

  const handleDetail = (id) => {
    // Handle detail
  };

  return (
    <>
      <section className="contact-section">
        {/* Customer Info */}
        <CustomerInfo customer={customer} />

        {/* Customer Vehicles */}
        <CustomerVehicle vehicles={vehicles} error={vehicleError} loading={loadingVehicle} />

        {/* Customer Orders */}
        <CustomerOrders orders={orders} error={orderError} loading={loadingOrder} handleEdit={handleEdit} handleDetail={handleDetail} />
      </section>
    </>
  );
}

export default CustomerProfile;

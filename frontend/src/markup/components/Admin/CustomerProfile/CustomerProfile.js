import React, { useRef, useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";

import { Table } from "react-bootstrap";

// import services
import vehicleService from "../../../../services/vehicle.service";
import customerService from "../../../../services/customer.service";
import orderService from "../../../../services/order.service";

// import the useAuth hook
import { useAuth } from "../../../../Contexts/AuthContext";

// import react icons
import { FaEdit } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// import the date-fns library
import { format } from "date-fns";

// import react router dom
import { useParams, useNavigate, Link } from "react-router-dom";

function CustomerProfile() {
  const navigate = useNavigate();
  const [customer1, setCustomer1] = useState("");
  const [vehicle1, setVehicle1] = useState([]);
  const [order1, setOrder1] = useState([]);
  const [showHide, setShowHide] = useState(false);
  const [serverMsg, setServerMsg] = useState("");

  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState("");

  const [vehicle_year, setVehicleYear] = useState("");
  const [vehicle_make, setVehicleMake] = useState("");
  const [vehicle_model, setVehicleModel] = useState("");
  const [vehicle_type, setVehicleType] = useState("");
  const [vehicle_mileage, setVehicleMileage] = useState("");
  const [vehicle_tag, setVehicleTag] = useState("");
  const [vehicle_serial, setVehicleSerial] = useState("");
  const [vehicle_color, setVehicleColor] = useState("");

  // vehicle error
  const [vehicle_error, setVehicleError] = useState("");
  const [order_error, setOrderError] = useState("");

  function Show() {
    setShowHide(!showHide);
  }

  // spinner handler state
  const [spin, setSpinner] = useState(false);
  const [spin2, setSpinner2] = useState(false);

  const { customer_hash } = useParams();

  // traget
  const vehicleYearDom = useRef();
  const vehicleMakeDom = useRef();
  const vehicleModelDom = useRef();
  const vehicleTypeDom = useRef();
  const vehicleMileageDom = useRef();
  const vehicleTagDom = useRef();
  const vehicleSerialDom = useRef();
  const vehicleColorDom = useRef();

  // create a variable to hold the users token
  let loggedInEmployeeToken = "";
  // destructure the auth hook and get the token
  const { employee } = useAuth();
  if (employee && employee.employee_token) {
    loggedInEmployeeToken = employee.employee_token;
  }

  // vehicle year value tracker
  function vehicleYearTracker() {
    setVehicleYear(vehicleYearDom.current.value);
  }

  // vehicle make value tracker
  function vehicleMakeTracker() {
    setVehicleMake(vehicleMakeDom.current.value);
  }

  // Vehicle Model value tracker
  function vehicleModelTracker() {
    setVehicleModel(vehicleModelDom.current.value);
  }

  // Vehicle Type value tracker
  function vehicleTypeTracker() {
    setVehicleType(vehicleTypeDom.current.value);
  }

  // Vehicle Mileage value tracker
  function vehicleMileageTracker() {
    setVehicleMileage(vehicleMileageDom.current.value);
  }

  // Vehicle Tag value tracker
  function vehicleTagTracker() {
    setVehicleTag(vehicleTagDom.current.value);
  }

  // Vehicle Serial value tracker
  function vehicleSerialTracker() {
    setVehicleSerial(vehicleSerialDom.current.value);
  }

  // Vehicle Color value tracker
  function vehicleColorTracker() {
    setVehicleColor(vehicleColorDom.current.value);
  }

  function handleEdit(id) {
    navigate(`/admin/orders/order-update/${id}`);
  }

  function handleDetail(id) {
    navigate(`/orders/order-detail/${id}`);
  }
  function handleOrder(id) {
    navigate(`/admin/order/add-new-order/${id}`);
  }

  //afunction to fetch customer data
  const fetchData1 = async () => {
    try {
      const data = await customerService?.singleCustomer(
        customer_hash,
        loggedInEmployeeToken
      );

      if (data?.status !== 200) {
        // set apiError to true
        setApiError(true);

        if (data?.status === 403) {
          setApiErrorMessage("Please login again");
        } else if (data?.status === 401) {
          setApiErrorMessage("You are not Authorized to view this page");
        } else {
          setApiErrorMessage("Please try again laterrrr");
        }
      }

      setCustomer1(data.data.singleCustomer[0]);
    } catch (error) {
      // console.log(error);
    }
  };


  //afunction to fetch customer vehicle data
  const fetchData2 = async () => {
    try {
      const data2 = await vehicleService.getCustomerVehicle(
        customer_hash,
        loggedInEmployeeToken
      );

      if (data2.status === 200) {
        setSpinner(!spin);
        setVehicle1(data2.data.customerVehicle);
      }

      setVehicleError("");
    } catch (error) {
      setSpinner(!spin);
      setVehicle1([]);
      setVehicleError(error.response.data.error);
    }

    setVehicleYear("");
    setVehicleMake("");
    setVehicleModel("");
    setVehicleType("");
    setVehicleMileage("");
    setVehicleTag("");
    setVehicleSerial("");
    setVehicleColor("");
  };

  //afunction to fetch customer vehicle data
  //a function to fetch customer order data
const fetchData3 = async () => {
  try {
    const data2 = await orderService.customerOrders(
      customer_hash,
      loggedInEmployeeToken
    );

    if (data2 && data2.status === 200 && data2.data) {
      setSpinner2(!spin2);
      setOrder1(data2.data.customerOrder);
    } else {
      setSpinner2(!spin2);
      setOrder1([]);
    }

    setOrderError("");
  } catch (error) {
    setSpinner2(!spin2);
    setOrder1([]);
    setOrderError(error.response?.data?.error || "An error occurred while fetching orders.");
  }
};


  useEffect(() => {
    fetchData1();
    fetchData2();
    fetchData3();
  }, []);

  // submit handler
  async function handleSubmit(e) {
    // prevent the default behavior of the form submission
    e.preventDefault();

    // prepare the data for form submission
    const FormData = {
      vehicle_year,
      vehicle_make,
      vehicle_model,
      vehicle_type,
      vehicle_mileage,
      vehicle_tag,
      vehicle_serial,
      vehicle_color,
      customer_hash,
    };

    try {
      const data = await vehicleService.addVehicle(
        FormData,
        loggedInEmployeeToken
      );

      console.log(data);

      fetchData2();
      setShowHide(!showHide);
    } catch (error) {
      setServerMsg(error.response.data.msg);

      setTimeout(() => {
        setServerMsg("");
      }, 2000);
    }
  }

  return (
    <>
      <section className="contact-section">
        <div className="mx-5">
          {/* Customer Info */}
          <div
            className=" ml-5 pb-4  d-flex order-danger "
            style={{ borderLeft: "2px solid red" }}>
            <div
              className="ml-n5 bg-danger text-center d-flex align-items-center justify-content-center rounded-circle text-white font-weight-bolder"
              style={{ width: "90px", height: "90px" }}>
              Info
            </div>
            <div className=" ml-4 p-3 flex-grow-1">
              <div className=" d-flex justify-content-between">
                <h4 className="fw-bold font-weight-bold">
                  <span className=" fw-bold mr-2">
                    {" "}
                    {customer1.customer_first_name}
                  </span>
                  {customer1.customer_last_name}
                  <span></span>
                </h4>
              </div>

              <div>
                <span className="font-weight-bold mr-2">Email :</span>
                <span className="text-secondary">
                  {customer1.customer_email}
                </span>
              </div>

              <div>
                <span className="font-weight-bold mr-2 ">Phone Number:</span>
                <span className="text-secondary">
                  {customer1.customer_phone_number}
                </span>
              </div>

              <div>
                <span className="font-weight-bold mr-2">Active Customer: </span>
                <span className="text-secondary">
                  {customer1?.active_customer_status ? "Yes" : "No"}
                </span>
              </div>

              <div>
                <span className="font-weight-bold mr-2">
                  Edit customer info{" "}
                </span>
                <span>
                  <Link
                    to={`/admin/customer-update/${customer1.customer_hash}`}>
                    <FaEdit color="#081336" />
                  </Link>
                </span>
              </div>
            </div>
          </div>

          {/* customer Vehicle */}
          <div className="d-flex">
            <div
              className=" pb-5 ml-5 d-flex "
              style={{ borderLeft: "2px solid red" }}>
              <div
                className="ml-n5 bg-danger text-center d-flex align-items-center justify-content-center rounded-circle text-white font-weight-bolder"
                style={{ width: "90px", height: "90px" }}>
                Cars
              </div>
            </div>
            <div className=" ml-3 w-100 px-4 pb-5">
              <div>
                <div>
                  <h4 className="font-weight-bold mt-2 mb-3">
                    VEHICLES OF{" "}
                    {customer1.customer_first_name +
                      " " +
                      customer1.customer_last_name}
                  </h4>
                </div>
                <div className=" bg-white px-2 py-1 ">
                  {}

                  {vehicle1.length ? (
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Vehicle Year</th>
                          <th>Vehicle Make</th>
                          <th>Vehicle Model</th>
                          <th>Vehicle Type</th>
                          <th>Vehicle Mileage</th>
                          <th>Vehicle Tag</th>
                          <th>Vehicle Serial</th>
                          <th>Vehicle Color</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vehicle1.map((vehicle) => (
                          <tr key={vehicle.vehicle_id}>
                            <td>{vehicle.vehicle_year}</td>
                            <td>{vehicle.vehicle_make}</td>
                            <td>{vehicle.vehicle_model}</td>
                            <td>{vehicle.vehicle_type}</td>
                            <td>{vehicle.vehicle_mileage}</td>
                            <td>{vehicle.vehicle_tag}</td>
                            <td>{vehicle.vehicle_serial}</td>
                            <td>{vehicle.vehicle_color}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  ) : spin ? (
                    <div className="NoVehicle">
                      <h2> {vehicle_error}</h2>
                    </div>
                  ) : (
                    <BeatLoader color="#081336" size={70} />
                  )}
                </div>
              </div>
              <div className="mt-2" style={{ widows: "85%" }}>
                <div className="pt-2 pb-3 d-flex justify-content-start">
                  <div
                    onClick={Show}
                    className=" rounded-circle d-flex justify-content-center align-items-center "
                    style={{ height: "25px", width: "25px" }}>
                    <span>
                      {showHide ? (
                        <GiCrossedBones size={40} color="#C91236" />
                      ) : (
                        <FaCirclePlus size={40} color="#222B48" />
                      )}
                    </span>
                  </div>
                </div>
              </div>
              {showHide ? (
                <>
                  <div className="bg-white p-4 d-block collapse show">
                    <div>
                      <h4 className="font-weight-bold mt-2 mb-3">
                        Add a new vehicle
                      </h4>
                    </div>

                    <div className="contact-form">
                      {/* Form Start*/}

                      <form onSubmit={handleSubmit}>
                        <div className="row clearfix">
                          {/* Vehicle Year*/}
                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              name="vehicle_year"
                              placeholder="Vehicle Year"
                              ref={vehicleYearDom}
                              value={vehicle_year}
                              onChange={vehicleYearTracker}
                              required
                            />
                            {"firstNameRequired" && (
                              <div className="validation-error" role="alert">
                                {/* {"firstNameRequired"} */}
                              </div>
                            )}
                          </div>

                          {/* Vehicle Make*/}
                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              name="vehicle_make"
                              placeholder="Vehicle Make"
                              required
                              ref={vehicleMakeDom}
                              value={vehicle_make}
                              onChange={vehicleMakeTracker}
                            />
                          </div>

                          {/* Vehicle Model */}
                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              name="vehicle_model"
                              placeholder="Vehicle Model"
                              ref={vehicleModelDom}
                              required
                              value={vehicle_model}
                              onChange={vehicleModelTracker}
                            />
                          </div>

                          {/* Vehicle Type */}
                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              name="vehicle_type"
                              placeholder="Vehicle Type"
                              ref={vehicleTypeDom}
                              required
                              value={vehicle_type}
                              onChange={vehicleTypeTracker}
                            />
                          </div>

                          {/* Vehicle Mileage */}
                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              name="vehicle_mileage"
                              placeholder="Vehicle Mileage"
                              ref={vehicleMileageDom}
                              required
                              value={vehicle_mileage}
                              onChange={vehicleMileageTracker}
                            />
                          </div>

                          {/* Vehicle Tag */}
                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              name="vehicle_tag"
                              placeholder="Vehicle Tag"
                              ref={vehicleTagDom}
                              required
                              value={vehicle_tag}
                              onChange={vehicleTagTracker}
                            />
                          </div>

                          {/* Vehicle Serial */}
                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              name="vehicle_serial"
                              placeholder="Vehicle Serial"
                              ref={vehicleSerialDom}
                              required
                              value={vehicle_serial}
                              onChange={vehicleSerialTracker}
                            />
                          </div>

                          {/* Vehicle Color */}
                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              name="vehicle_color"
                              placeholder="Vehicle Color"
                              ref={vehicleColorDom}
                              required
                              value={vehicle_color}
                              onChange={vehicleColorTracker}
                            />
                          </div>

                          {/* Submit Button */}
                          <div className="form-group col-md-12">
                            <button
                              // onClick={spinner}
                              className="theme-btn btn-style-one"
                              type="submit"
                              data-loading-text="Please wait...">
                              <span>Add Vehicle</span>
                            </button>
                            {serverMsg && (
                              <div
                                className="validation-error"
                                style={{
                                  color: "red",
                                  fontSize: "100%",
                                  fontWeight: "600",
                                  padding: "25px",
                                }}
                                role="alert">
                                {serverMsg}
                              </div>
                            )}
                          </div>
                        </div>
                      </form>

                      {/* Form End */}
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>

          {/* customer Orders */}
          <div className="d-flex">
            <div
              className=" pb-5 ml-5 d-flex "
              style={{ borderLeft: "2px solid red" }}>
              <div
                className="ml-n5 bg-danger text-center d-flex align-items-center justify-content-center rounded-circle text-white font-weight-bolder"
                style={{ width: "90px", height: "90px" }}>
                Orders
              </div>
            </div>
            <div className=" ml-3 w-100 px-4 pb-0">
              <div>
                <div>
                  <h4 className="font-weight-bold mt-2 mb-3">
                    ORDERS OF{" "}
                    {customer1.customer_first_name +
                      " " +
                      customer1.customer_last_name}
                  </h4>
                </div>
                <div className=" bg-white px-2 py-1 ">
                  {order1.length ? (
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Vehicle Make</th>
                          <th>Order Date</th>
                          <th>Received By</th>
                          <th>Order Status</th>
                          <th>Edit/View</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order1.map((order) => (
                          <tr key={order?.vehicle_id}>
                            <td>{order?.vehicle_make}</td>
                            <td className="order-date">
                              {format(new Date(order.order_date), "MM/dd/yyyy")}
                            </td>
                            <td>{order?.employee_first_name}</td>

                            <td className="border py-4">
                              <h6
                                className={
                                  order.order_status
                                    ? "text-center rounded-pill bg-success font-weight-bold text-white                            "
                                    : "text-center rounded-pill bg-warning font-weight-bold"
                                }>
                                {order.order_status
                                  ? "Completed"
                                  : "In Progress"}
                              </h6>
                            </td>

                            <td className="edit">
                              <span
                                onClick={() => handleEdit(order?.order_hash)}
                                className="hover1">
                                <FaEdit color="#081336" />
                              </span>

                              <span
                                onClick={() => handleDetail(order?.order_hash)}>
                                <FaArrowUpRightFromSquare color="#081336" />
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  ) : spin2 ? (
                    <div className="NoVehicle">
                      <h2> {order_error}</h2>
                    </div>
                  ) : (
                    <BeatLoader color="#081336" size={70} />
                  )}
                </div>
              </div>
              <div className="mt-2" style={{ widows: "85%" }}>
                <div className="pt-2 pb-3 d-flex justify-content-start">
                  <div
                    onClick={() => handleOrder(customer_hash)}
                    className=" rounded-circle d-flex justify-content-center align-items-center "
                    style={{ height: "25px", width: "25px" }}>
                    <span>
                      <FaCirclePlus size={40} color="#222B48" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomerProfile;

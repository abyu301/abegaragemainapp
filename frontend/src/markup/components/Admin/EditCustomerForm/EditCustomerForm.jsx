import React, { useRef, useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import customerService from "../../../../services/customer.service";
import { useAuth } from "../../../../Contexts/AuthContext";
import { useParams, useNavigate } from "react-router-dom";

function EditCustomer() {
  const navigate = useNavigate();
  const [customer_first_name, setFirstName] = useState("");
  const [customer_last_name, setLastName] = useState("");
  const [customer_phone, setPhoneNumber] = useState("");
  const [active_customer, setActiveCustomer] = useState("");
  const [customer1, setCustomer1] = useState("");
  const [serverMsg, setServerMsg] = useState("");
  const [spin, setSpinner] = useState(false);
  const firstNameDom = useRef();
  const lastNameDom = useRef();
  const phoneNumberDom = useRef();
  const checkboxDOM = useRef();
  let loggedInEmployeeToken = "";

  const { employee } = useAuth();
  if (employee && employee.employee_token) {
    loggedInEmployeeToken = employee.employee_token;
  }

  const { customer_hash } = useParams(); 

  // State variables for error handling
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState("");

  function firstNameTracker() {
    setFirstName(firstNameDom.current.value);
  }

  function lastNameTracker() {
    setLastName(lastNameDom.current.value);
  }

  function phoneNumberTracker() {
    setPhoneNumber(phoneNumberDom.current.value);
  }

  function activeCustomerTracker() {
    setActiveCustomer(checkboxDOM.current.checked);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await customerService?.singleCustomer(
          customer_hash,
          loggedInEmployeeToken
        );

        if (data?.status !== 200) {
          setApiError(true);

          if (data?.status === 403) {
            setApiErrorMessage("Please login again");
          } else if (data?.status === 401) {
            setApiErrorMessage("You are not Authorized to view this page");
          } else {
            setApiErrorMessage("Please try again later");
          }
        }

        setFirstName(data.data.singleCustomer[0].customer_first_name);
        setLastName(data.data.singleCustomer[0].customer_last_name);
        setPhoneNumber(data.data.singleCustomer[0].customer_phone_number);
        setCustomer1(data.data.singleCustomer[0]);
        checkboxDOM.current.checked =
          data.data.singleCustomer[0].active_customer_status;
        setActiveCustomer(checkboxDOM.current.checked);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const FormData = {
      customer_first_name,
      customer_last_name,
      customer_phone,
      active_customer,
      customer_hash,
    };

    try {
      setSpinner(!spin);
      const data = await customerService.updateCustomer(
        FormData,
        loggedInEmployeeToken
      );

      if (data.status === 200) {
        setServerMsg("Redirecting To Customers page...");

        setTimeout(() => {
          setSpinner(!spin);
          setServerMsg("");
          navigate("/admin/customers");
        }, 500);
      }
    } catch (error) {
      setTimeout(() => {
        setSpinner(!spin);
      }, 500);
    }
  }

  return (
    <>
      <section className="contact-section">
        <div className="auto-container">
          <div className="contact-title">
            <h2>Edit: {customer1.customer_email} </h2>
          </div>
          <div className="row clearfix">
            <div className="form-column col-lg-7">
              <div className="inner-column">
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    <div className="row clearfix">
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="employee_first_name"
                          placeholder="Employee first name"
                          ref={firstNameDom}
                          value={customer_first_name}
                          onChange={firstNameTracker}
                          required
                        />
                        {apiError && (
                          <div className="validation-error" role="alert">
                            {apiErrorMessage}
                          </div>
                        )}
                      </div>
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="employee_last_name"
                          placeholder="Employee last name"
                          required
                          ref={lastNameDom}
                          value={customer_last_name}
                          onChange={lastNameTracker}
                        />
                        {apiError && (
                          <div className="validation-error" role="alert">
                            {apiErrorMessage}
                          </div>
                        )}
                      </div>
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="employee_phone"
                          placeholder="Employee phone (555-555-5555)"
                          ref={phoneNumberDom}
                          required
                          value={customer_phone}
                          onChange={phoneNumberTracker}
                        />
                        {apiError && (
                          <div className="validation-error" role="alert">
                            {apiErrorMessage}
                          </div>
                        )}
                      </div>
                      <div className="form-group col-md-12 form-contro">
                        <h5 htmlFor="completed">Active Customer</h5>
                        <input
                          value={active_customer}
                          onChange={activeCustomerTracker}
                          ref={checkboxDOM}
                          type="checkbox"
                          name="completed"
                          className=""
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <button
                          className="theme-btn btn-style-one"
                          type="submit"
                          data-loading-text="Please wait..."
                        >
                          <span>
                            {spin ? (
                              <BeatLoader color="white" size={8} />
                            ) : (
                              "Update Customer"
                            )}
                          </span>
                        </button>
                        {serverMsg && (
                          <div
                            className="validation-error"
                            style={{
                              color: "green",
                              fontSize: "100%",
                              fontWeight: "600",
                              padding: "25px",
                            }}
                            role="alert"
                          >
                            {serverMsg}
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditCustomer;

import React, { useState, useRef } from "react";
import customerService from '../../../../services/customer.service';
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../../Contexts/AuthContext';

function AddCustomerForm() {
  const navigate = useNavigate();
  const [customer_email, setEmail] = useState("");
  const [customer_first_name, setFirstName] = useState("");
  const [customer_last_name, setLastName] = useState("");
  const [customer_phone, setPhoneNumber] = useState("");
  const [active_customer, setActive_customer] = useState(1);
  const [serverMsg, setServerMsg] = useState("");
  const [spin, setSpinner] = useState(false);
  
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState(""); // Define firstNameError state
  const [phoneError, setPhoneError] = useState(""); // Define phoneError state

  // create references for input fields
  const emailDom = useRef();
  const firstNameDom = useRef();
  const lastNameDom = useRef();
  const phoneNumberDom = useRef();

  // Destructure the auth hook and get the token
  const { employee } = useAuth();
  const loggedInEmployeeToken = employee ? employee.employee_token : '';

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;

    // First name is required 
    if (!customer_first_name) {
      setFirstNameError('First name is required');
      valid = false;
    } else {
      setFirstNameError('');
    }

    // Email is required
    if (!customer_email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!customer_email.includes('@')) {
      setEmailError('Invalid email format');
    } else {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(customer_email)) {
        setEmailError('Invalid email format');
        valid = false;
      } else {
        setEmailError('');
      }
    }
    
    // If the form is not valid, do not submit 
    if (!valid) {
      return;
    }
  
    // Prepare form data
    const formData = {
      customer_email,
      customer_first_name,
      customer_last_name,
      customer_phone,
      active_customer,
    };
  
    // Pass the form data to the service 
    try {
      const response = await customerService.createCustomer(formData, loggedInEmployeeToken);
      const data = await response.json();

      if (data.error) {
        setServerMsg(data.error);
      } else {
        setServerMsg('');
        setSpinner(true);
        setTimeout(() => {
          setSpinner(false);
          navigate('/');
        }, 2000);
      }
    } catch (error) {
      const resMessage = error.response?.data?.message || error.message || error.toString();
      setServerMsg(resMessage);
    }
  }

  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Add a New Customer</h2>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="form-group col-md-12">
                      <input
                        type="email"
                        name="employee_email"
                        placeholder="Customer email"
                        ref={emailDom}
                        value={customer_email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      {emailError && (
                        <div className="validation-error" role="alert">
                          {emailError}
                        </div>
                      )}
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="customer_first_name"
                        placeholder="Customer first name"
                        ref={firstNameDom}
                        value={customer_first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                      {firstNameError && (
                        <div className="validation-error" role="alert">
                          {firstNameError}
                        </div>
                      )}
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_last_name"
                        placeholder="Customer last name"
                        ref={lastNameDom}
                        value={customer_last_name}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_phone"
                        placeholder="Customer phone (555-555-5555)"
                        ref={phoneNumberDom}
                        value={customer_phone}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                      {phoneError && (
                        <div className="validation-error" role="alert">
                          {phoneError}
                        </div>
                      )}
                    </div>

                    <div className="form-group col-md-12">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        disabled={spin}
                      >
                        <span>
                          {spin ? (
                            <BeatLoader color="white" size={8} />
                          ) : (
                            "Add Customer"
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
  );
}

export default AddCustomerForm;

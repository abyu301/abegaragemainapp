import React, { useState } from 'react';
import customerService from '../../../../services/customer.service'; 

function AddCustomers() {
  const [customer_email, setEmail] = useState('');
  const [customer_first_name, setFirstName] = useState('');
  const [customer_last_name, setLastName] = useState('');
  const [customer_phone, setPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState('');
  const [firstNameRequired, setFirstNameRequired] = useState('');
  const [customerPhoneRequired, setCustomerPhoneRequired] = useState('');
  const [serverError, setServerError] = useState('');

  const handleSubmit = (e) => { 
    e.preventDefault();

    let valid = true; 

    if (!customer_email) {
      setEmailError('Email is required');
      valid = false;
    } else {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(customer_email)) {
        setEmailError('Invalid email format');
        valid = false;
      } else {
        setEmailError('');
      }
    }

    if (!customer_phone) {
      setCustomerPhoneRequired('Phone number is required');
      valid = false;
    } else {
      setCustomerPhoneRequired('');
    }

    if (!customer_first_name) {
      setFirstNameRequired('First name is required');
      valid = false;
    } else {
      setFirstNameRequired('');
    }

    if (!valid) {
      return;
    }

    const formData = {
      customer_email,
      customer_first_name,
      customer_last_name,
      customer_phone
    };

    const newCustomer = customerService.createCustomer(formData); // Call createCustomer function from customerService
    newCustomer
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setServerError(data.error);
        } else {
          // Handle successful response
          // Redirect or perform any action as needed
          console.log("Customer added successfully:", data);
        }
      })
      .catch((error) => {
        const resMessage =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        setServerError(resMessage);
      });
  };

  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Add a new customer</h2>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="form-group col-md-12">
                      {serverError && <div className="validation-error" role="alert">{serverError}</div>}
                      <input type="email" name="customer_email" value={customer_email} onChange={event => setEmail(event.target.value)} placeholder="Customer email" />
                      {emailError && <div className="validation-error" role="alert">{emailError}</div>}
                    </div>
                    <div className="form-group col-md-12">
                      <input type="text" name="customer_first_name" value={customer_first_name} onChange={event => setFirstName(event.target.value)} placeholder="Customer first name" />
                      {firstNameRequired && <div className="validation-error" role="alert">{firstNameRequired}</div>}
                    </div>
                    <div className="form-group col-md-12">
                      <input type="text" name="customer_last_name" value={customer_last_name} onChange={event => setLastName(event.target.value)} placeholder="Customer last name" />
                    </div>
                    <div className="form-group col-md-12">
                      <input type="text" name="customer_phone" value={customer_phone} onChange={event => setPhoneNumber(event.target.value)} placeholder="Customer phone (555-555-5555)" />
                      {customerPhoneRequired && <div className="validation-error" role="alert">{customerPhoneRequired}</div>}
                    </div>
                    <div className="form-group col-md-12">
                      <button className="theme-btn btn-style-one" type="submit" data-loading-text="Please wait..."><span>Add customer</span></button>
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

export default AddCustomers;

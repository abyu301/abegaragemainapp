import React, { useState } from 'react';
// import customer.service.js 
import customerService from '../../../../services/customer.service';
// import the useAuth hook 
import { useAuth } from "../../../../Contexts/AuthContext";


function AddCustomers() {
  const [customer_email, setEmail] = useState('');
  const [customer_first_name, setFirstName] = useState('');
  const [customer_last_name, setLastName] = useState('');
  const [customer_phone, setPhoneNumber] = useState('');
  // Errors 
  const [emailError, setEmailError] = useState('');
  const [firstNameRequired, setFirstNameRequired] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  // const handleSubmit = (e) => { 
  //   e.preventDefault();
  //   // Handle client side validations here 
  //   let valid = true; // Flag 
  //   // Email validation
  //   if (!customer_email) {
  //     setEmailError('Invalid email format');
  //     valid = false;
  //   } else {
  //     const regex = /^\S+@\S+\.\S+$/;
  //     if (!regex.test(customer_email)) {
  //       setEmailError('Invalid email format');
  //       valid = false;
  //     } else {
  //       setEmailError('');
  //     }
  //   }
  //   // Password has to be at least 6 characters long
  //   if (!customer_password || customer_password.length < 6) {
  //     setPasswordError('Password must be at least 6 characters long');
  //     valid = false;
  //   } else {
  //     setPasswordError('');
  //   }
  // }




  return (
    <div>AddCustomers</div>
  )
}

export default AddCustomers
// Import react 
import React from 'react';
// Import the Routes and Route components from react-router 
import { Routes, Route } from "react-router";
// Import the page components 
import Home from "./markup/pages/Home";
import Login from "./markup/pages/Login";
import AddEmployee from './markup/pages/admin/AddEmployee';
import AddCustomers from './markup/pages/admin/AddCustomers';
import AdminDashboard from './markup/pages/admin/AdminDashboard';
import AboutPage from './markup/pages/About';
import ContactPage from './markup/pages/Contact';
import ServicesPage from './markup/pages/Services';
import Unauthorized from './markup/pages/Unauthorized';
// Import the Orders and Customers component
import Orders from './markup/pages/admin/Orders';
import Customers from './markup/pages/admin/Customers';
import Employees from './markup/pages/admin/Employees';


// Import the css files 
import "./assets/template_assets/css/bootstrap.css";
import "./assets/template_assets/css/style.css";
import "./assets/template_assets/css/responsive.css";
import "./assets/template_assets/css/color.css";

// Import the custom css file 
import "./assets/styles/custom.css";

// Import the Header component 
import Header from './markup/components/Header/Header';
// Import the Footer component
import Footer from './markup/components/Footer/Footer';
import PrivateAuthRoute from './markup/components/Auth/PrivateAuthRoute';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/* // Add the Orders Route  */}
        <Route path="/admin/orders"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <Orders />
            </PrivateAuthRoute>
          } />
        {/* // Add the Customers Route  */}
        <Route path="/admin/customers"
            element={<Customers />
            }/>
        <Route path="/admin/add-customer"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddCustomers />
            </PrivateAuthRoute>
          } />
        {/* // Add the Employees Route  */}
        <Route path="/admin/employees" element={<Employees />
        } />
        <Route path="/admin/add-employee"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddEmployee />
            </PrivateAuthRoute>
          } />

           {/* // Add the AdminDashboard Route  */}
        <Route path="/admin"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AdminDashboard />
            </PrivateAuthRoute>
          } />
        {/* 
          Customers, AddCustomers (/admin/customers) - managers and admins
          Orders (/admin/orders) - Can be accessed by all employees
          Add employee (/admin/add-employee) - admins only 
            - Admin: 3 
            - Manager: 2 
            - Employee: 1 
        */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

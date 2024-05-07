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
import Services from './markup/pages/admin/Services';
import AboutPage from './markup/pages/About';
import ContactPage from './markup/pages/Contact';
import ServicesPage from './markup/pages/Services';
import Unauthorized from './markup/pages/Unauthorized';
// Import the Orders and Customers component
import Orders from './markup/pages/admin/Orders';
import EditOrder from "./markup/pages/admin/EditOrders";
import OrderDetails from "./markup/pages/admin/OrderDetails";
import AddNewOrders from "./markup/pages/admin/AddNewOrders";
import CreateNewOrders from './markup/pages/admin/CreateNewOrders';
import NewOrder from './markup/pages/admin/NewOrder';

import Customers from './markup/pages/admin/Customers';
import CustomerProfile from './markup/pages/admin/CustomerProfilee';
import EditCustomer from './markup/pages/admin/EditCustomer';
import Employees from './markup/pages/admin/Employees';
import EditEmployee from './markup/pages/admin/EditEmployee';


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

          {/* Customer Page Routes */}
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

          {/* Customer Profile Page Route */}
        <Route
          path="/admin/customer-profile/:customer_hash"
          element={<CustomerProfile />}
        />

        {/* Edit Customer Page Route */}
        <Route
          path="/admin/customer-update/:customer_hash"
          element={<EditCustomer />}
        />



        {/* Employees Page Routes */}
        {/* // Add the Employees Route  */}
        <Route path="/admin/employees" element={<Employees />
        } />
        <Route path="/admin/add-employee"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddEmployee />
            </PrivateAuthRoute>
          } />
          
           {/* Edit Employees page route */}
        <Route
          path="/admin/employee-update/:employee_hash"
          element={<EditEmployee />}
        />


           {/* // Add the AdminDashboard Route  */}
        <Route path="/admin"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AdminDashboard />
            </PrivateAuthRoute>
          } />

          {/* // Add the Services Route  */}
        <Route path="/admin/services"
          element={
            <PrivateAuthRoute roles={[3]}>
              <Services />
            </PrivateAuthRoute>
          } />

           {/* /* Order Page Route */}

             {/* Add New Order Page Route */}
        <Route path="/admin/order" element={<NewOrder />} />

        {/* Orders List Page Route*/}
        <Route path="/admin/orders" element={<Orders />} />

        {/* Order Update Page Route*/}
        <Route
          path="admin/orders/order-update/:order_hash"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <EditOrder />
            </PrivateAuthRoute>
          }
        />

        {/* Order detail Page Route*/}
        <Route
          path="/orders/order-detail/:order_hash"
          element={<OrderDetails />}
        />

        {/* Add customer Order Page Route*/}
        <Route
          path="admin/order/add-new-order/:customer_hash"
          element={<AddNewOrders />}
        />

        {/* Add customer service Order Page Route*/}
        <Route
          path="admin/order/add-new-order/select-service/:customer_hash/:vehicle_id"
          element={<CreateNewOrders />}
        />


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

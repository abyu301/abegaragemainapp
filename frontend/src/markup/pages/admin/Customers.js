import React from "react";
import { useAuth } from "../../../Contexts/AuthContext";
import LoginForm from "../../components/LoginForm/LoginForm";
import AdminMenu from "../../components/Admin/AdminMenu/AdminMenu";
import CustomersList from "../../components/Admin/CustomersList/CustomersList";
import { Link } from "react-router-dom";

const Customers = () => {
  const { isLogged, isAdmin_manager, isAdmin } = useAuth();

  if (isLogged) {
    if (isAdmin || isAdmin_manager) {
      return (
        <div>
          <div className="container-fluid admin-pages">
            <div className="row">
              <div className="col-md-3 admin-left-side">
                <AdminMenu />
              </div>

              <div className="col-md-9 admin-right-side">
                <CustomersList />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="not-found-container">
          <div className="not-found-content">
            <h2>
              You don't have the Permission to access the page you request!
            </h2>
            <Link className="back-home-link" to="/">
              <span> Back to Home</span>
            </Link>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default Customers;

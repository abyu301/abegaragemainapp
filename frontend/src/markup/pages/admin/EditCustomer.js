import React from "react";
import { useAuth } from "../../../Contexts/AuthContext";
import LoginForm from "../../components/LoginForm/LoginForm";
import AdminMenu from "../../components/Admin/AdminMenu/AdminMenu";
import EditCustomerForm from "../../components/Admin/EditCustomerForm/EditCustomerForm";
import { Link } from "react-router-dom";

function EditCustomer() {
  const { isLogged, isAdmin } = useAuth();

  if (isLogged) {
    if (isAdmin) {
      return (
        <div>
          <div className="container-fluid admin-pages">
            <div className="row">
              <div className="col-md-3 admin-left-side">
                <AdminMenu />
              </div>
              <div className="col-md-9 admin-right-side">
                <EditCustomerForm /> {/* Updated component name */}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="not-found-container"> {/* Changed 'class' to 'className' */}
          <div className="not-found-content"> {/* Changed 'class' to 'className' */}
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

export default EditCustomer;

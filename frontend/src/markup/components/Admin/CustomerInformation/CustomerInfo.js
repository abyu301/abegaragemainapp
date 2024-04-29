import React from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const CustomerInfo = ({ customer }) => {
  return (
    <div className=" ml-5 pb-4  d-flex order-danger " style={{ borderLeft: "2px solid red" }}>
      <div className="ml-n5 bg-danger text-center d-flex align-items-center justify-content-center rounded-circle text-white font-weight-bolder" style={{ width: "90px", height: "90px" }}>
        Info
      </div>
      <div className=" ml-4 p-3 flex-grow-1">
        <div className=" d-flex justify-content-between">
          <h4 className="fw-bold font-weight-bold">
            <span className=" fw-bold mr-2">{customer.customer_first_name}</span>
            {customer.customer_last_name}
            <span></span>
          </h4>
        </div>

        <div>
          <span className="font-weight-bold mr-2">Email :</span>
          <span className="text-secondary">{customer.customer_email}</span>
        </div>

        <div>
          <span className="font-weight-bold mr-2 ">Phone Number:</span>
          <span className="text-secondary">{customer.customer_phone_number}</span>
        </div>

        <div>
          <span className="font-weight-bold mr-2">Active Customer: </span>
          <span className="text-secondary">{customer.active_customer_status ? "Yes" : "No"}</span>
        </div>

        <div>
          <span className="font-weight-bold mr-2">Edit customer info </span>
          <span>
            <Link to={`/admin/customer-update/${customer.customer_hash}`}>
              <FaEdit color="#081336" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;

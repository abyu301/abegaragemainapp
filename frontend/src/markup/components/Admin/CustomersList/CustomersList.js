import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { FaEdit, FaAngleUp } from "react-icons/fa";
import { RiArrowUpLine } from "react-icons/ri";
import { BeatLoader } from "react-spinners";
import { format } from "date-fns";
import { useAuth } from "../../../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import customerService from "../../../../services/customer.service";

function CustomersList() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();
  const [spin, setSpinner] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState(null);
  const { employee } = useAuth();
  let token = null;
  if (employee) {
    token = employee?.employee_token;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await customerService?.getAllCustomers(token);
        if (!data.ok) {
          console.log(data.status);
          // console.log(data);
          setApiError(true);
          if (data.status === 401) {
            setApiErrorMessage("Please login again");
          } else if (data.status === 403) {
            setApiErrorMessage("You are not authorized to view this page");
          } else {
            setApiErrorMessage("Please try again later");
          }
          return; // Return here to prevent further execution
        }
        
        const customersData = await data.json();
        // console.log(customersData);
        if (customersData.customers && customersData.customers.length !== 0) {
          setCustomers(customersData.customers);
        }
        setTimeout(() => {
          setSpinner(!spin);
        }, 200);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  

  function handleEdit(id) {
    navigate(`/admin/customer-update/${id}`);
  }

  function handleProfile(id) {
    navigate(`/admin/customer-profile/${id}`);
  }

  return (
    <>
      {apiError ? (
        <section className="contact-section">
          <div className="auto-container">
            <div className="contact-title">
              <h2>
                {apiErrorMessage}
                <span style={{ color: "red" }}> ___</span>
              </h2>
            </div>
          </div>
        </section>
      ) : (
        <section className="contact-section">
          <div className="auto-container">
            <div className="contact-title">
              <h2>Customers</h2>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Added Data</th>
                  <th>Active</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {spin ? (
                  customers && customers.length > 0 ? (
                    customers.map((customer) => (
                      <tr
                        className={
                          !customer.active_customer_status
                            ? `${"inactive"}`
                            : `${"active"}`
                        }
                        key={customer.customer_id}
                      >
                        <td>{customer.customer_id}</td>
                        <td>{customer.customer_first_name}</td>
                        <td>{customer.customer_last_name}</td>
                        <td>{customer.customer_email}</td>
                        <td>{customer.customer_phone_number}</td>
                        <td>
                          {format(
                            new Date(customer.customer_added_date),
                            "MM - dd - yyyy | kk:mm"
                          )}
                        </td>
                        <td>
                          {customer.active_customer_status ? "Yes" : "No"}
                        </td>
                        <td className="edit">
                          <span
                            onClick={() =>
                              handleEdit(customer.customer_hash)
                            }
                            className="hover1"
                          >
                            <FaEdit color="#081336" />
                          </span>
                          <span
                            onClick={() =>
                              handleProfile(customer.customer_hash)
                            }
                          >
                            <RiArrowUpLine color="#081336" />
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center">
                        No customers found.
                      </td>
                    </tr>
                  )
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">
                      <BeatLoader color="#081336" size={50} />
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </section>
      )}
    </>
  );
}

export default CustomersList;

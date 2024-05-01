import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { format } from 'date-fns'; 
import { FaEdit, FaTrash } from 'react-icons/fa';
import employeeService from "../../../../services/employee.service";
import { useAuth } from "../../../../Contexts/AuthContext";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState(null);
  const { employee } = useAuth();
  let token = null; 
  if (employee) {
    token = employee.employee_token;
  }

  useEffect(() => {
    const allEmployees = employeeService.getAllEmployees(token);
    allEmployees.then((res) => {
      if (!res.ok) {
        console.log(res.status);
        setApiError(true);
        if (res.status === 401) {
          setApiErrorMessage("Please login again");
        } else if (res.status === 403) {
          setApiErrorMessage("You are not authorized to view this page");
        } else {
          setApiErrorMessage("Please try again later");
        }
      }
      return res.json()
    }).then((data) => {
      if (data.data.length !== 0) {
        setEmployees(data.data)
      }

    }).catch((err) => {
      console.error(err);
    })
  }, []);

  return (
    <>
      {apiError ? (
        <section className="contact-section">
          <div className="auto-container">
            <div className="contact-title">
              <h2>{apiErrorMessage}</h2>
            </div >
          </div>
        </section>
      ) : (
        <>
          <section className="contact-section">
            <div className="auto-container">
              <div className="contact-title">
                <h2>Employees</h2 >
              </div >
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Active</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Added Date</th>
                    <th>Role</th>
                    <th>Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee.employee_id}>
                      <td>{employee.active_employee ? "Yes" : "No"}</td>
                      <td>{employee.employee_first_name}</td>
                      <td>{employee.employee_last_name}</td>
                      <td>{employee.employee_email}</td>
                      <td>{employee.employee_phone}</td>
                      <td>{format(new Date(employee.added_date), 'MM - dd - yyyy | kk:mm')}</td>
                      <td>{employee.company_role_name}</td>
                      <td>
                        <div className="edit-delete-icons">
                          <Link to={`/admin/employee-update/${employee.employee_hash}`}><FaEdit /></Link> {/* Edit Icon */}
                          <span>&nbsp;|&nbsp;</span>
                          <Link to={`/admin/employees/delete/${employee.employee_id}`}><FaTrash /></Link> {/* Delete Icon */}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default EmployeesList;

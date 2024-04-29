import React from "react";
import { Table } from "react-bootstrap";
import { BeatLoader } from "react-spinners";
import { FaEdit, FaArrowUp } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";
import { format } from "date-fns";

const CustomerOrders = ({ orders, error, loading, handleEdit, handleDetail }) => {
  return (
    <div className="d-flex">
      <div className=" pb-5 ml-5 d-flex " style={{ borderLeft: "2px solid red" }}>
        <div className="ml-n5 bg-danger text-center d-flex align-items-center justify-content-center rounded-circle text-white font-weight-bolder" style={{ width: "90px", height: "90px" }}>
          Orders
        </div>
      </div>
      <div className=" ml-3 w-100 px-4 pb-0">
        <div>
          <div>
            <h4 className="font-weight-bold mt-2 mb-3">ORDERS OF {"customer_name"}</h4>
          </div>
          <div className=" bg-white px-2 py-1 ">
            {orders.length ? (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Vehicle Make</th>
                    <th>Order Date</th>
                    <th>Received By</th>
                    <th>Order Status</th>
                    <th>Edit/View</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order?.vehicle_id}>
                      <td>{order?.vehicle_make}</td>
                      <td className="order-date">{format(new Date(order.order_date), "MM/dd/yyyy")}</td>
                      <td>{order?.employee_first_name}</td>
                      <td className="border py-4">
                        <h6 className={order.order_status ? "text-center rounded-pill bg-success font-weight-bold text-white" : "text-center rounded-pill bg-warning font-weight-bold"}>
                          {order.order_status ? "Completed" : "In Progress"}
                        </h6>
                      </td>
                      <td className="edit">
                        <span onClick={() => handleEdit(order?.order_hash)} className="hover1">
                          <FaEdit color="#081336" />
                        </span>
                        <span onClick={() => handleDetail(order?.order_hash)}>
                          <FaArrowUp color="#081336" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : loading ? (
              <BeatLoader color="#081336" size={70} />
            ) : (
              <div className="NoVehicle">
                <h2>{error}</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerOrders;

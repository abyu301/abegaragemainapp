import React from "react";
import { Table } from "react-bootstrap";
import { BeatLoader } from "react-spinners";

const CustomerVehicle = ({ vehicles, error, loading }) => {
  return (
    <div className="d-flex">
      <div className=" pb-5 ml-5 d-flex " style={{ borderLeft: "2px solid red" }}>
        <div className="ml-n5 bg-danger text-center d-flex align-items-center justify-content-center rounded-circle text-white font-weight-bolder" style={{ width: "90px", height: "90px" }}>
          Cars
        </div>
      </div>
      <div className=" ml-3 w-100 px-4 pb-5">
        <div>
          <div>
            <h4 className="font-weight-bold mt-2 mb-3">VEHICLES OF {"customer_name"}</h4>
          </div>
          <div className=" bg-white px-2 py-1 ">
            {vehicles.length ? (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Vehicle Year</th>
                    <th>Vehicle Make</th>
                    <th>Vehicle Model</th>
                    <th>Vehicle Type</th>
                    <th>Vehicle Mileage</th>
                    <th>Vehicle Tag</th>
                    <th>Vehicle Serial</th>
                    <th>Vehicle Color</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicles.map((vehicle) => (
                    <tr key={vehicle.vehicle_id}>
                      <td>{vehicle.vehicle_year}</td>
                      <td>{vehicle.vehicle_make}</td>
                      <td>{vehicle.vehicle_model}</td>
                      <td>{vehicle.vehicle_type}</td>
                      <td>{vehicle.vehicle_mileage}</td>
                      <td>{vehicle.vehicle_tag}</td>
                      <td>{vehicle.vehicle_serial}</td>
                      <td>{vehicle.vehicle_color}</td>
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

export default CustomerVehicle;

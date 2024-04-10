// const conn = require("../config/db.config");

// async function checkIfCustomerExists(email) {
//     try {
//         const query = "SELECT * FROM customer_identifier WHERE customer_email = ?";
//         const [rows] = await conn.query(query, [email]);

//         if (!rows || rows.length === 0) {
//             return false; // Customer does not exist
//         }
        
//         return true; // Customer exists
//     } catch (error) {
//         console.error("Error checking if customer exists:", error);
//         return false; // Return false in case of error
//     }
// }

// async function createCustomer(customer) {
//     try {
//         const { customer_first_name, customer_last_name, customer_email, customer_phone } = customer;

//         // Check if required fields are undefined
//         if (!customer_first_name || !customer_last_name || !customer_email || !customer_phone) {
//             throw new Error("Missing required fields");
//         }

//         // Check if customer already exists
//         const customerExists = await checkIfCustomerExists(customer_email);
//         if (customerExists) {
//             throw new Error("A customer with this email already exists.");
//         }

//         const query = "INSERT INTO customer_info (customer_first_name, customer_last_name) VALUES (?, ?)";
//         const [rows] = await conn.query(query, [customer_first_name, customer_last_name]);

//         if (rows.affectedRows !== 1) {
//             return false;
//         }

//         const customer_id = rows.insertId;

//         const query2 = "INSERT INTO customer_identifier (customer_id, customer_email, customer_phone) VALUES (?, ?, ?)";
//         const [rows2] = await conn.query(query2, [customer_id, customer_email, customer_phone]);

//         if (rows2.affectedRows !== 1) {
//             return false;
//         }

//         return { customer_id };
//     } catch (error) {
//         console.error("Error creating customer:", error.message);
//         return false;
//     }
// }

// module.exports = {
//     checkIfCustomerExists,
//     createCustomer
// };




const conn = require("../config/db.config");
const bcrypt = require('bcrypt');

async function checkIfCustomerExists(email) {
  try {
    const query = "SELECT * FROM customer_identifier WHERE customer_email = ?";
    const [rows] = await conn.query(query, [email]);
    return rows && rows.length > 0;
  } catch (error) {
    console.error("Error checking if customer exists:", error);
    return false;
  }
}

async function createCustomer(customer) {
  try {
    const { customer_first_name, customer_last_name, customer_email, customer_phone_number } = customer;
    if (!customer_first_name || !customer_last_name || !customer_email || !customer_phone_number) {
      throw new Error("Missing required fields");
    }

    const customerExists = await checkIfCustomerExists(customer_email);
    if (customerExists) {
      throw new Error("A customer with this email already exists.");
    }

    const query = "INSERT INTO customer_info (customer_first_name, customer_last_name, active_customer_status) VALUES (?, ?, ?)";
    const [rows1] = await conn.query(query, [customer_first_name, customer_last_name, 1]); // Assuming 1 indicates active status

    if (rows1.affectedRows !== 1) {
      return false;
    }

    const customerId = rows1.insertId;

    const query2 = "INSERT INTO customer_identifier (customer_id, customer_email, customer_phone_number) VALUES (?, ?, ?)";
    const [rows2] = await conn.query(query2, [customerId, customer_email, customer_phone_number]);

    if (rows2.affectedRows !== 1) {
      return false;
    }

    return { customer_id: customerId };
  } catch (error) {
    console.error("Error creating customer:", error.message);
    return false;
  }
}

async function getCustomerByEmail(customer_email) {
  try {
    const query = "SELECT * FROM customer_info INNER JOIN customer_identifier ON customer_info.customer_id = customer_identifier.customer_id WHERE customer_identifier.customer_email = ?";
    const [rows] = await conn.query(query, [customer_email]);
    return rows;
  } catch (error) {
    console.error("Error fetching customer by email:", error);
    return null;
  }
}

async function getAllCustomers() {
  try {
    const query = "SELECT * FROM customer_info INNER JOIN customer_identifier ON customer_info.customer_id = customer_identifier.customer_id";
    const [rows] = await conn.query(query);
    return rows;
  } catch (error) {
    console.error("Error fetching all customers:", error);
    return null;
  }
}

module.exports = {
  checkIfCustomerExists,
  createCustomer,
  getCustomerByEmail,
  getAllCustomers
};


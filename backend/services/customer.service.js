// Import the query function from the db.config.js file
const conn = require("../config/db.config");
// Import the bcrypt module
const bcrypt = require('bcrypt');

// A function to check if a customer exists in the database
async function checkIfCustomerExists(email) {
    try {
        const query = "SELECT * FROM customer_identifier WHERE customer_email = ?";
        const [rows] = await conn.query(query, [email]);
        console.log(rows);
        return rows.length > 0;
    } catch (error) {
        console.error("Error checking if customer exists:", error);
        return false;
    }
}

// A function to create a new customer
async function createCustomer(customer) {
    try {
        let createdCustomer = {};
        // Insert the customer data into the customer_info table
        const query = "INSERT INTO customer_info (customer_first_name, customer_last_name) VALUES (?, ?)";
        const [rows] = await conn.query(query, [customer.customer_first_name, customer.customer_last_name]);
        console.log(rows);
        if (rows.affectedRows !== 1) {
        return false;
        }
        // Get the customer id from the insert
        const customer_id = rows.insertId;
        // Insert the remaining data into the customer_identifier table
        const query2 = "INSERT INTO customer_identifier (customer_id, customer_email, customer_phone) VALUES (?, ?, ?)";
        const rows2 = await conn.query(query2, [customer_id, customer.customer_email, customer.customer_phone]);
        // Construct the customer object to return
        createdCustomer = {
        customer_id: customer_id
        };
        return createdCustomer;
    } catch (error) {
        console.error("Error creating customer:", error);
        return false;
    }
}

// A function to get customer by email
async function getCustomerByEmail(customer_email) {
    try {
        const query = "SELECT * FROM customer_identifier WHERE customer_email = ?";
        const [rows] = await conn.query(query, [customer_email]);
        return rows;
    } catch (error) {
        console.error("Error getting customer by email:", error);
        return false;
    }
}

// A function to get the total number of customers
async function getTotalCustomers() {
    try {
        const query = "SELECT COUNT(*) AS total_customers FROM customer_identifier";
        const [rows] = await conn.query(query);
        const totalCustomers = rows[0].total_customers;
        return totalCustomers;
        } catch (error) {
        console.error("Error getting total number of customers:", error);
        return false;
    }
}

// A function to get the count of new customers registered in the last 1 year
async function getNewCustomersLastYear() {
    try {
        const query = "SELECT COUNT(*) AS new_customers_last_year FROM customer_identifier WHERE registration_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 1 YEAR)";
        const [rows] = await conn.query(query);
        const newCustomersLastYear = rows[0].new_customers_last_year;
        return newCustomersLastYear;
        } catch (error) {
        console.error("Error getting new customers last year:", error);
        return false;
    }
}

  // A function to get the count of new customers registered in the last 1 month
async function getNewCustomersLastMonth() {
    try {
        const query = "SELECT COUNT(*) AS new_customers_last_month FROM customer_identifier WHERE registration_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 1 MONTH)";
        const [rows] = await conn.query(query);
        const newCustomersLastMonth = rows[0].new_customers_last_month;
        return newCustomersLastMonth;
        } catch (error) {
        console.error("Error getting new customers last month:", error);
        return false;
    }
}


// Export the functions for use in the controller
module.exports = {
    checkIfCustomerExists,
    createCustomer,
    getCustomerByEmail,
    getTotalCustomers,
    getNewCustomersLastYear,
    getNewCustomersLastMonth
};

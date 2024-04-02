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
        const { customer_first_name, customer_last_name, customer_email, customer_phone } = customer;
        if (!customer_first_name || !customer_last_name || !customer_email || !customer_phone) {
            throw new Error("Missing required fields");
        }

        const customerExists = await checkIfCustomerExists(customer_email);
        if (customerExists) {
            throw new Error("A customer with this email already exists.");
        }

        let result;
        await conn.beginTransaction();
        try {
            const query1 = "INSERT INTO customer_info (customer_first_name, customer_last_name) VALUES (?, ?)";
            const [rows1] = await conn.query(query1, [customer_first_name, customer_last_name]);
            const customerId = rows1.insertId;

            const query2 = "INSERT INTO customer_identifier (customer_id, customer_email, customer_phone) VALUES (?, ?, ?)";
            const [rows2] = await conn.query(query2, [customerId, customer_email, customer_phone]);

            if (rows1.affectedRows !== 1 || rows2.affectedRows !== 1) {
                throw new Error("Failed to create customer.");
            }
            result = { customer_id: customerId };
            await conn.commit();
        } catch (error) {
            await conn.rollback();
            throw error;
        }
        return result;
    } catch (error) {
        console.error("Error creating customer:", error.message);
        return false;
    }
}

module.exports = {
    checkIfCustomerExists,
    createCustomer
};

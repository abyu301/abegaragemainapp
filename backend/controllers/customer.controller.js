// const customerService = require('../services/customer.service');

// async function createCustomer(req, res, next) {
//     try {
//         const customerExists = await customerService.checkIfCustomerExists(req.body.customer_email);
//         if (customerExists) {
//             return res.status(400).json({
//                 error: "This email address is already associated with another customer!"
//             });
//         }

//         const customerData = req.body;
//         const customer = await customerService.createCustomer(customerData);
//         if (!customer) {
//             return res.status(400).json({
//                 error: "Failed to add the customer!"
//             });
//         }

//         return res.status(200).json({
//             status: "success",
//             data: customer // Return the created customer data if needed
//         });
//     } catch (error) {
//         console.error("Error creating customer:", error);
//         return res.status(500).json({
//             error: "Something went wrong while creating the customer!"
//         });
//     }
// }

// async function getAllCustomers(req, res, next) {
//     try {
//         const customers = await customerService.getAllCustomers();
//         if (!customers) {
//             return res.status(400).json({
//                 error: "Failed to get all customers!"
//             });
//         }

//         return res.status(200).json({
//             status: "success",
//             data: customers
//         });
//     } catch (error) {
//         console.error("Error fetching all customers:", error);
//         return res.status(500).json({
//             error: "Something went wrong while fetching all customers!"
//         });
//     }
// }

// module.exports = {
//     createCustomer,
//     getAllCustomers
// };






const customerService = require('../services/customer.service');

async function createCustomer(req, res, next) {
    try {
        const customerExists = await customerService.checkIfCustomerExists(req.body.customer_email);
        if (customerExists) {
            return res.status(400).json({
                error: "This email address is already associated with another customer!"
            });
        }

        const customerData = req.body;
        const customer = await customerService.createCustomer(customerData);
        if (!customer) {
            return res.status(400).json({
                error: "Failed to add the customer!"
            });
        }

        return res.status(200).json({
            status: "success",
            data: customer // Return the created customer data if needed
        });
    } catch (error) {
        console.error("Error creating customer:", error);
        return next(error); // Pass the error to the error handling middleware
    }
}

async function getAllCustomers(req, res) {
    try {
        const customers = await customerService.getAllCustomers();
        if (!customers || customers.length === 0) {
            return res.status(404).json({
                error: "No customers found!"
            });
        }

        return res.status(200).json({
            status: "success",
            data: customers
        });
    } catch (error) {
        console.error("Error fetching all customers:", error);
        return res.status(500).json({
            error: "Something went wrong while fetching all customers!"
        });
    }
}

module.exports = {
    createCustomer,
    getAllCustomers
};

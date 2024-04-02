// // // Import the express module
// // const express = require('express');
// // // Call the router method from express to create the router
// // const router = express.Router();
// // // Import the customer controller
// // const customerController = require('../controllers/customer.controller');
// // // Import middleware
// // const authMiddleware = require("../middlewares/auth.middleware");

// // // Create a route to handle the add customer request on post
// // router.post("/api/customer", [ authMiddleware.isAdmin], customerController.createCustomer);
// // // Create a route to handle the get all customers request on get
// // // router.get("/api/customers", [authMiddleware.verifyToken, authMiddleware.isAdmin], customerController.getAllCustomers);
// // // // Create a route to handle the get customer by ID request on get
// // // router.get("/api/customers/:id", [authMiddleware.verifyToken, authMiddleware.isAdmin], customerController.getCustomerById);
// // // // Create a route to handle the update customer request on put
// // // router.put("/api/customers/:id", [authMiddleware.verifyToken, authMiddleware.isAdmin], customerController.updateCustomer);
// // // // Create a route to handle the delete customer request on delete
// // // router.delete("/api/customers/:id", [authMiddleware.verifyToken, authMiddleware.isAdmin], customerController.deleteCustomer);

// // // Export the router
// // module.exports = router;





// // Import the express module
// const express = require('express');
// // Call the router method from express to create the router
// const router = express.Router();
// // Import the customer controller
// const customerController = require('../controllers/customer.controller');
// // Import middleware
// const authMiddleware = require("../middlewares/auth.middleware");

// // Create a route to handle the add customer request on post
// router.post("/api/customer", [authMiddleware.isAdmin], async (req, res) => {
//     try {
//         const customerData = req.body;
//         const createdCustomer = await customerController.createCustomer(customerData);

//         if (!createdCustomer) {
//             return res.status(400).json({ error: "Failed to add the customer." });
//         }

//         return res.status(200).json({ status: "success", data: createdCustomer });
//     } catch (error) {
//         console.error("Error adding customer:", error);
//         return res.status(500).json({ error: "Something went wrong." });
//     }
// });

// // Export the router
// module.exports = router;








const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer.controller');
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/api/customers", [authMiddleware.verifyToken, authMiddleware.isAdmin], async (req, res) => {
    try {
        const customerData = req.body;
        const createdCustomer = await customerController.createCustomer(customerData);

        if (!createdCustomer) {
            return res.status(400).json({ error: "Failed to add the customer." });
        }

        return res.status(200).json({ status: "success", data: createdCustomer });
    } catch (error) {
        console.error("Error adding customer:", error);
        return res.status(500).json({ error: "Something went wrong." });
    }
});

module.exports = router;

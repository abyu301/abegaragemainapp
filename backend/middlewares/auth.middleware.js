// // Import the dotenv package
// require('dotenv').config();
// // Import the jsonwebtoken package
// const jwt = require("jsonwebtoken");
// // A function to verify the token received from the frontend 
// // Import the employee service 
// const employeeService = require("../services/employee.service");

// // A function to verify the token received from the frontend 
// const verifyToken = async (req, res, next) => {
//     let token = req.headers["x-access-token"];
//     if (!token) {
//         return res.status(403).send({
//             status: "fail",
//             message: "No token provided!"
//         });
//     }

//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//         if (err) {
//             return res.status(401).send({
//                 status: "fail",
//                 message: "Unauthorized!"
//             });
//         }
        
//         // Check if decoded token contains employee_email
//         if (!decoded.employee_email) {
//             return res.status(401).send({
//                 status: "fail",
//                 message: "Invalid token format!"
//             });
//         }

//         req.employee_email = decoded.employee_email;
//         next();
//     });
// }


//     // A function to check if the user is an admin
//     const isAdmin = async (req, res, next) => {
//     // let token = req.headers["x-access-token"];
//     console.log(req.employee_email);
//     const employee_email = req.employee_email;
//     const employee = await employeeService.getEmployeeByEmail(employee_email);
//     if (employee[0].company_role_id === 3) {
//         next();
//     } else {
//         return res.status(403).send({
//         status: "fail",
//         error: "Not an Admin!"
//         });
//     }
//     }

//     const authMiddleware = {
//     verifyToken,
//     isAdmin
//     }

// module.exports = authMiddleware;






const jwt = require("jsonwebtoken");
const employeeService = require("../services/employee.service");

const verifyToken = async (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).json({
            status: "fail",
            message: "No token provided!"
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                status: "fail",
                message: "Unauthorized!"
            });
        }
        
        if (!decoded.employee_email) {
            return res.status(401).json({
                status: "fail",
                message: "Invalid token format!"
            });
        }

        req.employee_email = decoded.employee_email;
        next();
    });
};

const isAdmin = async (req, res, next) => {
    const employee_email = req.employee_email;
    try {
        const employee = await employeeService.getEmployeeByEmail(employee_email);
        if (employee && employee[0].company_role_id === 3) {
            next();
        } else {
            return res.status(403).json({
                status: "fail",
                error: "Not an Admin!"
            });
        }
    } catch (error) {
        console.error("Error checking admin status:", error);
        return res.status(500).json({
            error: "Something went wrong!"
        });
    }
};

module.exports = {
    verifyToken,
    isAdmin
};


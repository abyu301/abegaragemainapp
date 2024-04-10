// // Import React and the Hooks we need here 
// import React, { useState, useEffect, useContext } from "react";
// // Import the Util function we created to handle the reading from the local storage 
// import getAuth from '../util/auth';
// // Create a context object  
// const AuthContext = React.createContext();
// // Create a custom hook to use the context
// export const useAuth = () => {
//   return useContext(AuthContext);
// }
// // Create a provider component  
// export const AuthProvider = ({ children }) => {
//   const [isLogged, setIsLogged] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [employee, setEmployee] = useState(null);
//   const [customer, setCustomer] = useState(null);

//   const value = { isLogged, isAdmin, setIsAdmin, setIsLogged, employee };

//   useEffect(() => {
//     // Retrieve the logged in user from local storage
//     const loggedInEmployee = getAuth();
//     // console.log(loggedInEmployee);
//     // const loggedInCustomer = getAuth();
//     // console.log(loggedInCustomer);

//     loggedInEmployee.then((response) => {
//       // console.log(response);
//       if (response.employee_token) {
//         setIsLogged(true);
//         // 3 is the employee_role for admin
//         if (response.employee_role === 3) {
//           setIsAdmin(true);
//         }
//         setEmployee(response);
//       }
//     });
//   }, []);
//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };




import React, { useState, useEffect, useContext } from "react";
import getAuth from '../util/auth';

// Create a context object
const AuthContext = React.createContext();

// Custom hook to use the context
export const useAuth = () => {
  return useContext(AuthContext);
}

// Provider component
export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve the logged in user from local storage
    const loggedInUser = getAuth();
    
    // Check if the user is logged in
    if (loggedInUser && loggedInUser.token) {
      setIsLogged(true);
      // Check if the user is an admin
      if (loggedInUser.role === "admin") {
        setIsAdmin(true);
      }
      // Set the user state
      setUser(loggedInUser);
    }
  }, []);

  // Value to provide to the context
  const value = { isLogged, isAdmin, user };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

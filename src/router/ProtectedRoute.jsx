// import { useEffect, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase/firebase";
// import { Navigate } from "react-router-dom";
// import { Spin } from "antd";

// const ProtectedRoute = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [checking, setChecking] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setChecking(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   if (checking) {
//     return (
//       <div style={{ textAlign: "center", marginTop: "100px" }}>
//         <Spin size="large" />
//       </div>
//     );
//   }

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default ProtectedRoute;


import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Spin } from "antd";

const ProtectedRoute = ({ children }) => {
  const [checking, setChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Check for JWT token in localStorage
    if (token) {
      setIsAuthenticated(true); // User is authenticated if token exists
    } else {
      setIsAuthenticated(false); // User is not authenticated
    }
    setChecking(false); // Stop checking after determining authentication status
  }, []);

  if (checking) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <Spin size="large" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  return children; // Render protected content if authenticated
};

export default ProtectedRoute;
import { Routes, Route, useLocation, Navigate } from "react-router-dom"; 
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./router/ProtectedRoute";
import BookRecommendation from "../src/pages/Recommendations/BookRecommendation";
import MyReview from "./pages/Review/MyReview";
import Book from "../src/pages/Books/Book";
import NavBar from "../src/components/layout/NavBar"; 
import Sidebar from "../src/components/layout/Sidebar"; 
import Composite from "./pages/Books/Composite";
import UpdateRecommendation from "./pages/Recommendations/UpdateRecommendation";
import MainRecom from "./pages/Recommendations/MainRecom";
import AddRecommendation from "./pages/Recommendations/AddRecommendation";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import UpdBook from "./pages/Books/UpdBook";

const App = () => {
  const location = useLocation(); // Get the current route
  const [sidebarWidth, setSidebarWidth] = useState(250); // Default sidebar width

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      <ToastContainer />
      <div style={{ display: "flex", height: "100vh" }}>
        {!isAuthPage && (
          <Sidebar onCollapse={(width) => setSidebarWidth(width)} />
        )}
        <div
          style={{
            flex: 1,
            marginLeft: isAuthPage ? 0 : sidebarWidth, // No margin for auth pages
            transition: "margin-left 0.3s ease",
          }}
        >
          <NavBar sidebarWidth={isAuthPage ? 0 : sidebarWidth} />{" "}
          {/* Full width for auth pages */}
          <div
            style={{
              display: isAuthPage ? "flex" : "block",
              justifyContent: "center",
              alignItems: "center",
              height: isAuthPage ? "calc(100vh - 64px)" : "auto", // Center content for auth pages
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />{" "}
              {/* Redirect "/" to "/login" */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/review" element={<MyReview />} />
              <Route path="/book" element={<Book />} />
              <Route path="/update-book/:id" element={<UpdBook />} />
              <Route path="/recommendation" element={<BookRecommendation />} />
              <Route path="/composite" element={<Composite />} />
              <Route
                path="/UpdateRecommendations/:id"
                element={<UpdateRecommendation />}
              />
              <Route path="/main-recommendations" element={<MainRecom />} />
              <Route
                path="/add-recommendation"
                element={<AddRecommendation />}
              />
              <Route path="*" element={<Navigate to="/login" />} />{" "}
              {/* Redirect unknown routes to "/login" */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

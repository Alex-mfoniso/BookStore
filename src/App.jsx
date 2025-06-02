// import { Routes, Route, useLocation } from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import ProtectedRoute from "./router/ProtectedRoute";
// import BookRecommendation from "../src/pages/Recommendations/BookRecommendation";
// import MyReview from "./pages/Review/MyReview";
// import Book from "../src/pages/Books/Book";
// import NavBar from "../src/components/layout/NavBar"; // Import NavBar
// import Sidebar from "../src/components/layout/Sidebar"; // Import Sidebar
// import Composite from "./pages/Books/composite";
// import UpdateRecommendation from "./pages/Recommendations/UpdateRecommendation";
// import MainRecom from "./pages/Recommendations/MainRecom"; // Import MainRecom
// import AddRecommendation from "./pages/Recommendations/AddRecommendation";
// import React, { useState } from "react";

// const App = () => {
//   const location = useLocation(); // Get the current route
//   const [sidebarWidth, setSidebarWidth] = useState(250); // Default sidebar width

//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       {/* Render Sidebar only if the current route is not "/login", "/signup", or "/" */}
//       {location.pathname !== "/login" &&
//         location.pathname !== "/signup" &&
//         location.pathname !== "/" && (
//           <Sidebar onCollapse={(width) => setSidebarWidth(width)} />
//         )}
//       <div style={{ sidebarWidth }}>
//         {/* put this inside flex: 1, marginLeft: */}
//         {/* Render NavBar for all routes */}
//         <NavBar sidebarWidth={sidebarWidth} />
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/review" element={<MyReview />} />
//           <Route path="/book" element={<Book />} />
//           <Route path="/recommendation" element={<BookRecommendation />} />
//           <Route path="/composite" element={<Composite />} />
//           <Route
//             path="/UpdateRecommendations/:id"
//             element={<UpdateRecommendation />}
//           />
//           <Route path="/main-recommendations" element={<MainRecom />} />
//           <Route path="/add-recommendation" element={<AddRecommendation />} />
//           <Route path="*" element={<Login />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default App;


import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./router/ProtectedRoute";
import BookRecommendation from "../src/pages/Recommendations/BookRecommendation";
import MyReview from "./pages/Review/MyReview";
import Book from "../src/pages/Books/Book";
import NavBar from "../src/components/layout/NavBar"; // Import NavBar
import Sidebar from "../src/components/layout/Sidebar"; // Import Sidebar
import Composite from "./pages/Books/Composite";
import UpdateRecommendation from "./pages/Recommendations/UpdateRecommendation";
import MainRecom from "./pages/Recommendations/MainRecom"; // Import MainRecom
import AddRecommendation from "./pages/Recommendations/AddRecommendation";
import React, { useState } from "react";

const App = () => {
  const location = useLocation(); // Get the current route
  const [sidebarWidth, setSidebarWidth] = useState(250); // Default sidebar width

  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
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
        <NavBar sidebarWidth={isAuthPage ? 0 : sidebarWidth} /> {/* Full width for auth pages */}
        <div
          style={{
            display: isAuthPage ? "flex" : "block",
            justifyContent: "center",
            alignItems: "center",
            height: isAuthPage ? "calc(100vh - 64px)" : "auto", // Center content for auth pages
          }}
        >
          <Routes>
            <Route path="/" element={<Login />} />
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
            <Route path="/recommendation" element={<BookRecommendation />} />
            <Route path="/composite" element={<Composite />} />
            <Route
              path="/UpdateRecommendations/:id"
              element={<UpdateRecommendation />}
            />
            <Route path="/main-recommendations" element={<MainRecom />} />
            <Route path="/add-recommendation" element={<AddRecommendation />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
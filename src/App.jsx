import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./router/ProtectedRoute";
import BookRecommendation from "../src/pages/Recommendations/BookRecommendation";
import MyReview from "./pages/Review/MyReview";
import Book from "../src/pages/Books/Book";
import NavBar from "../src/components/layout/NavBar"; // Import NavBar
import Sidebar from "../src/components/layout/Sidebar"; // Import Sidebar
import Composite from "./pages/Books/composite";

const App = () => {
  const location = useLocation(); // Get the current route

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Render Sidebar only if the current route is not "/login" */}
      {location.pathname !== "/login" && <Sidebar />}
      <div style={{ flex: 1 }}>
        {/* Render NavBar only if the current route is not "/login" */}
        {location.pathname !== "/login" && <NavBar />}
        <Routes>
          <Route path="/login" element={<Login />} />
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
          <Route path="/composite" element={<Composite/>} />

          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

// import { Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import ProtectedRoute from "./router/ProtectedRoute";
// import BookRecommendation from "../src/pages/Recommendations/BookRecommendation";
// import MyReview from "./pages/Review/MyReview";
// import Book from "../src/pages/Books/Book";
// // import Composite from "../src/pages/Books/Composite";//git get sense
// import NavBar from "../src/components/layout/NavBar"; // Import NavBar
// import Sidebar from "../src/components/layout/Sidebar"; // Import Sidebar

// const App = () => {
//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       <Sidebar />
//       <div style={{ flex: 1 }}>
//         <NavBar />
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/review" element={<MyReview />} />
//           <Route path="/book" element={<Book/>} />
//           {/* <Route path="/composite" element={<Composite />} /> */}
//           <Route path="/recommendation" element={<BookRecommendation />} />
//           <Route path="*" element={<Login />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default App;


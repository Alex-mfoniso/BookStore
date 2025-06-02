import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./router/ProtectedRoute";
import BookRecommendation from "../src/pages/Recommendations/BookRecommendation";
import MyReview from "./pages/Review/MyReview";
import Book from "../src/pages/Books/Book";
import NavBar from "../src/components/layout/NavBar"; // Import NavBar
import Sidebar from "../src/components/layout/Sidebar"; // Import Sidebar

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
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
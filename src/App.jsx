import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./router/ProtectedRoute";
import BookRecommendation from "./pages/BookRecommendation";

const App = () => {
  return (
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
      <Route path="/recommendation" element={<BookRecommendation/>}/>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default App;

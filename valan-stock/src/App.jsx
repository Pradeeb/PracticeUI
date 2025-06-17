import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Dashboard from "./Components/Pages/Dashboard";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Optional: Redirect default route to login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

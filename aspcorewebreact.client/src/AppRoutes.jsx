// AppRoutes.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FetchEmployee from "./components/FetchEmployee"; // Example component for a route

function AppRoutes({ children }) {
  return (
    <Router>
      {children} {/* This will render the App component */}
      <Routes>
        <Route path="/fetch-employee" element={<FetchEmployee />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;

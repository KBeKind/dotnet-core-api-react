// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS import
import App from "./App.jsx";
import AppRoutes from "./AppRoutes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes>
      <App />
    </AppRoutes>
  </React.StrictMode>
);

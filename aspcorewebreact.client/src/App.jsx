// App.jsx
import React from "react";
import NavMenu from "./components/NavMenu";
import "./App.css";

function App() {
  return (
    <div>
      <NavMenu />
      {/* Other components that are not part of routing can go here */}
    </div>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <header>
      <div>NavMenu</div>
      <ul>
        <li>
          <Link to="/fetch-employee">Fetch Employee</Link>
        </li>
      </ul>
    </header>
  );
};

export default NavMenu;

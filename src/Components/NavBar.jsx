import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul className="navlist">
        <li className="navlink">
          <Link to="/main">Home</Link>
        </li>
        <li className="navlink">
          <Link to="/instruments">Instruments</Link>
        </li>
        <li className="navlink">
          <Link to="/about">About</Link>
        </li>
        <li className="navlink">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

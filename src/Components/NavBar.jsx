import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/style.css";

function NavBar() {
  const listClass = "fs-3 list-unstyled d-flex justify-content-start gap-3 flex-wrap";
  const linkClass = "link-offset-2 link-underline link-underline-opacity-0 navlink";

  return (
    <div>
      <ul className={listClass}>
        <li>
          <Link className={linkClass} to="/main">Home</Link>
        </li>
        <li>
          <Link className={linkClass} to="/instruments">Instruments</Link>
        </li>
        <li>
          <Link className={linkClass} to="/about">About</Link>
        </li>
        <li>
          <Link className={linkClass} to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

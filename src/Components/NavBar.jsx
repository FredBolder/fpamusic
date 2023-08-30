import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./assets/css/style.css";
import AudioContext from "../Context/AudioContext";

function NavBar() {
  const { introMusic } = useContext(AudioContext);

  const listClass =
    "fs-3 list-unstyled d-flex justify-content-start column-gap-3 row-gap-2 flex-wrap";
  const linkClass =
    "link-offset-2 link-underline link-underline-opacity-0 navlink";

  function navClicked() {
    if (introMusic !== null) {
      introMusic.pause();
    }
  }

  return (
    <div>
      <ul className={listClass} onClick={navClicked}>
        <li>
          <Link className={linkClass} to="/instruments">
            Instruments
          </Link>
        </li>
        <li>
          <Link className={linkClass} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={linkClass} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

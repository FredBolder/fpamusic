import React from "react";
import logo from "../Images/logo_fpa_music.png";

function Logo() {
  return (
    <span>
      <img
        style={{
          width: "100px",
        }}
        className="mt-0 me-5 p-0"
        src={logo}
        alt="Logo"
      />
    </span>
  );
}

export default Logo;

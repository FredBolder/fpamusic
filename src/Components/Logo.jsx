import React from "react";
import logo from "../Images/logo_fpa_music.png";

function Logo() {
  return (
    <span>
      <img
        style={{
          width: "80px",
        }}
        className="mt-2 ms-2 me-4"
        src={logo}
        alt="Logo"
      />
    </span>
  );
}

export default Logo;

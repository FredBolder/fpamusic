import React from "react";
import logo from "../Images/logo_fpa_music.png";

function Logo() {
  return (
    <div>
      <img
        style={{
          width: "100px",
          position: "absolute",
          top: "0",
          left: "0",
        }}
        className="mt-0 p-0"
        src={logo}
        alt="Logo"
      />
    </div>
  );
}

export default Logo;

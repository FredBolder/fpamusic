import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import "./assets/css/style.css";

function InstrumentPage() {
  return (
    <div className="bg-dark text-light">
      <header className="d-flex justify-content-start">
        <Logo />
        <div>
          <NavBar />
          <h1>Instrument</h1>
        </div>
      </header>
    </div>
  );
}

export default Instrument;

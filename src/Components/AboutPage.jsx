import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import "./assets/css/style.css";

function AboutPage() {
  return (
    <div className="bg-dark text-light">
      <header className="d-flex justify-content-start">
        <Logo />
        <div>
          <NavBar />
          <h1>About</h1>
        </div>
      </header>
    </div>
  );
}

export default AboutPage;

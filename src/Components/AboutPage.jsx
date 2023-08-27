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
      <main className="ms-5 mt-5 fs-3">
        <p>TODO: text from Priyanka</p>
      </main>
    </div>
  );
}

export default AboutPage;

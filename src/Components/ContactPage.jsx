import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import "./assets/css/style.css";

function ContactPage() {
  return (
    <div className="bg-dark text-light">
      <header className="d-flex justify-content-start">
        <Logo />
        <div>
          <NavBar />
          <h1>Contact</h1>
        </div>
      </header>
      <main className="ms-4 me-4 mt-5 fs-3">
        <p>Feel free to contact us for questions or feedback.</p>
        <p>Email: <a href="mailto:fgh.bolder@gmail.com" target="_blank" rel="noreferrer">fgh.bolder@gmail.com</a></p>
      </main>
    </div>
  );
}

export default ContactPage;

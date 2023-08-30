import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import "./assets/css/style.css";
import { Link } from "react-router-dom";

const linkClass =
  "link-offset-2 link-underline link-underline-opacity-0 navlink";

function PrivacyPage() {
  return (
    <div className="bg-dark text-light">
      <header className="d-flex justify-content-start">
        <Logo />
        <div>
          <NavBar />
          <h1>Privacy Statement</h1>
        </div>
      </header>
      <main className="ms-4 me-4 mt-5 fs-3">
        <p>
          Welcome to FPA Music. We do not collect any personal information from
          visitors to our website. Our website contain external links. We are
          not responsible for the privacy policies or content of those sites.
          Please read their privacy statement. We reserve the right to change
          this privacy statement from time to time.{" "}
          <Link className={linkClass} to="/contact">
            Contact us
          </Link>{" "}
          for any questions or request.
        </p>
      </main>
    </div>
  );
}

export default PrivacyPage;

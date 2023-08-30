import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import "./assets/css/style.css";

function AboutPage() {
  const linkClass =
    "link-offset-2 link-underline link-underline-opacity-0 navlink";
  return (
    <div className="bg-dark text-light">
      <header className="d-flex justify-content-start">
        <Logo />
        <div>
          <NavBar />
          <h1>About</h1>
        </div>
      </header>
      <main className="ms-4 me-4 mt-5 fs-3">
        <p>
          FPA Music is the music learning platform where you can learn more
          about different instruments. FPA stands for
          <span className="fw-bold"> F</span>red,{" "}
          <span className="fw-bold"> P</span>riyanka and{" "}
          <span className="fw-bold"> A</span>
          ntonio - the three team members working on it. Our mission is to make
          music education available for everybody. When you are learning how to
          play a musical instrument, it will increase your coordination skills,
          makes you creative and builds your confidence.
        </p>
      </main>
      <footer className="ms-4 me-4 mt-5 fs-3">
        {" "}
        Here you can read our{" "}
        <Link className={linkClass} to="/privacy">
          privacy statement.
        </Link>
        <p className="me-3">
          <h2 className="fw-bold mt-5">Disclaimer</h2>
          The information provided on this website is intended for general
          informational purposes only. While we make every effort to ensure the
          accuracy and reliability of the information presented, we cannot
          guarantee that the website will be error-free or uninterrupted. We do
          not accept any liability for any actions taken or decisions made based
          on the information provided on this website.
        </p>
      </footer>
    </div>
  );
}

export default AboutPage;

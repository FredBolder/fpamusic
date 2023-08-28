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
        <p>
          FPA music is the music learning platform where you can learn different
          instrument. Our Mission is to give music education available to
          everyone. It should be free and fun learning. When you learn to play a
          musical instrument, it will increase coordination skills provide
          strategies to support mental health and well-being.
        </p>
      </main>
    </div>
  );
}

export default AboutPage;

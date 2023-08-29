import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import "./assets/css/style.css";
import { Link } from "react-router-dom";


const linkClass = "link-offset-2 link-underline link-underline-opacity-0 navlink";
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
     
      <Link className={linkClass} to="/privacy">Here</Link> you can read our privacy statement.

     
    </div>
  );
}

export default AboutPage;

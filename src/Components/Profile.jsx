import React from "react";
import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./assets/css/secondPage.css";
import Home from "./Home";
import About from "./About";
import InstrumentPage from "./InstrumentPage";
import ContactInfo from "./ContactInfo";
import "./assets/css/secondPage.css";
import logofpa from "../Images/logofpa.png";

function Profile() {
  const { username } = useContext(LoginContext);
  return (
    <>
      <BrowserRouter>
        <nav className="navbarProfile">
          <div className="container">
            <div>
              <img
                style={{
                  width: "150px",
                  color: "black",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  border: "2px solid #0000FF",
                }}
                class="mt-0 p-0 "
                src={logofpa}
                alt="Logo"
                height="270"
                width="270"
              />
              Your Logo
            </div>
            <ul className="navlist">
              <li className="navlink">
                <Link to="/home">Home</Link>
              </li>
              <li className="navlink">
                <Link to="/about">About</Link>
              </li>
              <li className="navlink">
                <Link to="/instrument">Instrument</Link>
              </li>
              <li className="navlink">
                <Link to="/contactinfo">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/instrument" element={<InstrumentPage />} />
          <Route path="/contactInfo" element={<ContactInfo />} />
        </Routes>
      </BrowserRouter>

      <div>Welcome {username}</div>
      <div
        class="position-relative"
        style={{
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          backgroundImage: `url(${require("../Images/mainpage.jpg")})`,
        }}
      ></div>
    </>
  );
}
export default Profile;

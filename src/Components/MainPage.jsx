import React from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";
import "./assets/css/style.css";

function MainPage() {
  return (
    <>
      <div
        className="position-relative bg-dark text-light"
        style={{
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          backgroundImage: `url(${require("../Images/mainpage.jpg")})`,
        }}
      >
        <header className="d-flex justify-content-start">
          <Logo />
          <div>
            <NavBar />
            <h1>Home</h1>
          </div>
        </header>
      </div>
    </>
  );
}
export default MainPage;

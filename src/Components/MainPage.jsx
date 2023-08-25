import React from "react";
import "./assets/css/mainPage.css";
import NavBar from "./NavBar";
import Logo from "./Logo";

function MainPage() {
  return (
    <>
      <div
        className="position-relative"
        style={{
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          backgroundImage: `url(${require("../Images/mainpage.jpg")})`,
        }}
      >
        <Logo />
        <NavBar />
      </div>
    </>
  );
}
export default MainPage;

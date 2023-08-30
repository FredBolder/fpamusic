import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import "./assets/css/style.css";
import AudioContext from "../Context/AudioContext";

function StartPage() {
  const navigate = useNavigate();
  const { introMusic } = useContext(AudioContext);

  function getStartedClicked(e) {
    introMusic.play();
    navigate("/instruments");
  }

  return (
    <body
      style={{
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        backgroundImage: `url(${require("../Images/startpage.jpg")})`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <header style={{ position: "absolute", top: "0", left: "0" }}>
        <Logo />
      </header>
      <main
        className="p-4 text-white"
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          position: "relative",
          bottom: "160px",
        }}
      >
        <div style={{ maxWidth: "900px", marginLeft: "10px" }}>
          <div>
            <h1 className="fw-bold mb-2">It is your right to enjoy music</h1>
            <p className="fs-5 ">
              Elevate your musical skills and knowledge. Our website provides a
              range of resources, empowering beginners and experienced musicians
              alike.
            </p>
          </div>
          <div>
            <button
              className="btn-custom"
              type="button"
              onClick={getStartedClicked}
              style={{ width: "300px" }}
            >
              GET STARTED
            </button>
          </div>
        </div>
      </main>
    </body>
  );
}

export default StartPage;

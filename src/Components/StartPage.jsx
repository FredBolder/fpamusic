import React from "react";
import { useNavigate } from "react-router-dom";
import "./assets/css/style.css";
import Logo from "./Logo";
import Sounds from "../Sounds/Fur_Elise_Rock.mp3";

function StartPage() {
  const navigate = useNavigate();
  const audio = new Audio(Sounds);
  function getStartedClicked(e) {
    audio.play();
    navigate("/main");
  }

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
          backgroundImage: `url(${require("../Images/startpage.jpg")})`,
        }}
      >
        <Logo />
        <h1
          style={{
            color: "White",
            position: "absolute",
            bottom: "140px",
            left: "140px",
          }}
          className="fst-italic"
        >
          "It is your right to enjoy music"
        </h1>
        <p
          style={{
            color: "White",
            position: "absolute",
            bottom: "80px",
            left: "200px",
          }}
          className="fst-italic"
        >
          This website was made with a purpose of making music <br />
          education available without any hidden cost
        </p>
        <div className="d-grid gap-2 col-6 mx-auto p-2 position-absolute bottom-0 start-0 mb-4 mx-2">
          <button
            className="btn btn-danger transparentredBtn"
            type="button"
            onClick={getStartedClicked}
          >
            GET STARTED
          </button>
        </div>
      </div>
    </>
  );
}
export default StartPage;

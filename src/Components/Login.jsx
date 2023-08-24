import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import logofpa from "../Images/logofpa.png";
import { Instruments } from "../Modules/instruments";
import "./assets/css/firstPage.css";

function Login() {
  const { setUsername, setshowProfile } = useContext(LoginContext);
  /*const instruments = new Instruments();
   const drums = instruments.getInfo("drums");
   const info =drums.generalInfo;*/

  return (
    <>
      {""}
      <div
        class="position-relative"
        style={{
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          backgroundImage: `url(${require("../Images/hero_background.jpg")})`,
        }}
      >
        <div>
          <img style={{
           
            width:"250px",
            color:"white",
            position: "absolute",
            top: "0",
            left: "0",
            border: '2px solid #0000FF',
          
          }}
            class="mt-0 p-0 "
            src={logofpa}
            alt="Logo"
            height="270"
            width="270"
          />
        </div>
        <br></br>
        <br></br>
        <h1
          style={{
            color: "White",

            position: "absolute",
            bottom: "140px",
            left: "140px",
          }}
          class="fst-italic"
        >
          "Its your right to enjoy Music"
        </h1>
        <p
          style={{
            color: "White",
            position: "absolute",
            bottom: "80px",
            left: "200px",
          }}
          class="  fst-italic  "
        >
          This website was made with a purpose of making music <br></br>
          education available without any hidden cost
        </p>
        {/*<p class="text-light  fst-italic mb-1 p-2 position-absolute position-absolute position-absolute p top-50 start-50 translate-middle">
          /*Please Enter your Name:-
          <br></br>
          <br></br>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
      ></input>*/}

        <br></br>
        <br></br>
        <div class="d-grid gap-2 col-6 mx-auto  p-2   position-absolute bottom-0 start-0  mb-4 mx-2 ">
          <button
            className="btn btn-danger transparentredBtn"
            type="button"
            onClick={() => {
              setshowProfile(true);
            }}
          >
            Get started{" "}
          </button>
        </div>
      </div>
    </>
  );
}
export default Login;

import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import logofpa from "../Images/logofpa.png";

function Login() {
  const { setUsername, setshowProfile } = useContext(LoginContext);

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
        <h1>
          <img
            class="mt-1 p-1 position-absolute fixed top-0 start-0"
            src={logofpa}
            alt="Logo"
            height="270"
            width="270"
          />
        </h1>
        <br></br>
        <br></br>
        <h2 class="text-light  fst-italic mx-auto p-2 position-absolute position-absolute bottom- 0  end-50">
          "At FPAMusic",we’re making Music for Life"
        </h2>

        <p class="text-light  fst-italic mb-1 p-2 position-absolute position-absolute position-absolute p top-50 start-50 translate-middle">
          Please Enter your Name:-
          <br></br>
          <br></br>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          
         <br></br>
          <br></br>
          <button
            className="btn btn-light"
            onClick={() => {
              setshowProfile(true);
            }}
          >
      
            Get started{" "}
          </button>
        </p>
      </div>
    </>
  );
}

export default Login;

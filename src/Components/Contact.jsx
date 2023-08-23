import React from "react";
import { LoginContext } from "./Contexts/LoginContexts";
import { useContext } from "react";

function Contact() {
  const { setshowContact } = useContext(LoginContext);
  return (
    <div>
      <button
        onClick={() => {
          setshowContact(true);
        }}
      >
        Contact
      </button>
    </div>
  );
}

export default Contact;

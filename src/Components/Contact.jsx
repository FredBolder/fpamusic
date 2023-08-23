import React from "react";
import { LoginContext } from "./Contexts/LoginContexts";
import { useContext } from "react";

function Contact() {
  const { setShowContact } = useContext(LoginContext);

  return (
    <div>
      <button
        onClick={() => {
          setShowContact(true);
        }}
      >
        Contact
      </button>
    </div>
  );
}

export default Contact;

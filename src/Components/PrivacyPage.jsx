import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import "./assets/css/style.css";

function PrivacyPage() {
  return (
    <div className="bg-dark text-light">
      <header className="d-flex justify-content-start">
        <Logo />
        <div>
          <NavBar />
          <h1>Privacy Statement</h1>
        </div>
      </header>
      <main className="ms-5 mt-5 fs-3">
        <p>
          Welcome to FPAmusic Website. This Privacy Statement explains how we
          handle information on our purely informational website. Information
          Collection We do not collect any personal information from visitors to
          our website. External Links Our website may provide links to external
          websites. We are not responsible for the privacy practices or content
          of those sites. Please review their respective privacy policies.
          Changes to This Privacy Statement We may update this Privacy Statement
          to reflect changes in our practices or for legal reasons. Updates will
          be posted on our website. Contact Us For any questions about our
          Privacy Statement, please reach out to us at our contact Page.
        </p>
      </main>
    </div>
  );
}

export default PrivacyPage;

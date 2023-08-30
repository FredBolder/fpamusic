import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { Instruments } from "../Modules/instruments";
import { Utils } from "../Modules/utils";
import imgDarbuka from "../Images/darbuka_1.jpg";
import imgDrums from "../Images/drums_1.jpg";
import imgKalimba from "../Images/kalimba_1.jpg";
import imgPiano from "../Images/piano_1.jpg";
import imgRecorder from "../Images/recorder_1.jpg";
import imgTongueDrum from "../Images/tongue_drum_1.jpg";
import imgVoice from "../Images/voice_1.jpg";
import "./assets/css/style.css";

function InstrumentPage() {
  const instruments = new Instruments();
  const instrumentName = Utils.underscoresToSpaces(useParams().name);
  const info = instruments.getInfo(instrumentName);
  const linkCategories = instruments.getLinkCategories(info.links);
  const [selectedCategory, setSelectedCategory] = useState("general");

  function selectCategory(category) {
    setSelectedCategory(category === selectedCategory ? null : category);
  }

  function getImage(instrument) {
    let result = null;
    const instrumentNameLower = instrument.toLowerCase();
    switch (instrumentNameLower) {
      case "darbuka":
        result = imgDarbuka;
        break;
      case "drums":
        result = imgDrums;
        break;
      case "kalimba":
        result = imgKalimba;
        break;
      case "piano":
        result = imgPiano;
        break;
      case "recorder":
        result = imgRecorder;
        break;
      case "tongue drum":
        result = imgTongueDrum;
        break;
      case "voice":
        result = imgVoice;
        break;
      default:
        result = null;
        break;
    }
    return result;
  }
  return (
    <div className="bg-dark text-light">
      <header className="d-flex justify-content-start">
        <Logo />
        <div>
          <NavBar />
          <h1 className="mt-5">{Utils.capitalize(instrumentName)}</h1>
        </div>
      </header>
      <main className="container  mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 rounded-4 shadow-lg p-4">
            <img
              src={getImage(instrumentName)}
              alt={instrumentName}
              className="img-fluid mb-4 rounded-4"
            />
            <h3>Description</h3>
            <p className="fs-5">{info.generalInfo}</p>
            <div>
              <h3 className="mb-0">Resources</h3>
              <p className="text-secondary fs-6">
                (please choose the category below)
              </p>
              {linkCategories.map((category, index) => (
                <div key={index}>
                  <div
                    className="text-decoration-none navlink fw-bold fs-4"
                    onClick={() => selectCategory(category)}
                  >
                    {Utils.underscoresToSpaces(Utils.capitalize(category))}
                  </div>
                  {selectedCategory === category && (
                    <ul className="list-unstyled ml-0 p-0 text-white">
                      {info.links[category].map((linkWithDesc, linkIndex) => {
                        const link = Utils.getStringFromList(linkWithDesc, 0);
                        const description = Utils.getStringFromList(
                          linkWithDesc,
                          1
                        );
                        return (
                          <li
                            className="pt-1 pb-1 d-flex align-items-center justify-content-start column-gap-3 flex-wrap"
                            key={linkIndex}
                          >
                            <a
                              className="text-decoration-none fs-5"
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link}
                            </a>
                            <div className="text-white fs-5">
                              {Utils.capitalize(description.trim())}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default InstrumentPage;

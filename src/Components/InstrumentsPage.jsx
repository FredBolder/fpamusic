import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { Instruments } from "../Modules/instruments";
import { Utils } from "../Modules/utils";
import AudioContext from "../Context/AudioContext";
import imgDarbuka from "../Images/darbuka_1s.jpg";
import imgDrums from "../Images/drums_1s.jpg";
import imgKalimba from "../Images/kalimba_1s.jpg";
import imgPiano from "../Images/piano_1s.jpg";
import imgRecorder from "../Images/recorder_1s.jpg";
import imgTongueDrum from "../Images/tongue_drum_1s.jpg";
import imgVoice from "../Images/voice_1s.jpg";
import "./assets/css/style.css";

function InstrumentsPage() {
  const { introMusic } = useContext(AudioContext);
  const instruments = new Instruments();
  const instrumentList = instruments.getInstrumentList();

  function navClicked() {
    if (introMusic !== null) {
      introMusic.pause();
    }
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
          <h1>Instruments</h1>
        </div>
      </header>
      <main>
        <div className="ms-3 me-4 mt-4 d-flex gap-3 flex-wrap justify-content-center justify-content-md-start ">
          {instrumentList.map((item) => {
            return (
              <div
                key={item}
                className="card cardbackground"
                style={{ width: "18rem" }}
              >
                <Link
                  to={`/instrument/${Utils.spacesToUnderscores(
                    item.toLowerCase()
                  )}`}
                  className="navlink"
                  onClick={navClicked}
                >
                  <img
                    src={getImage(item)}
                    className="card-img-top"
                    alt={item}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{item}</h5>
                  <p className="card-text">
                    {Utils.partOfString(
                      instruments.getInfo(item).generalInfo,
                      100
                    )}
                  </p>
                  <Link
                    to={`/instrument/${Utils.spacesToUnderscores(
                      item.toLowerCase()
                    )}`}
                    className="navlink"
                    onClick={navClicked}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default InstrumentsPage;

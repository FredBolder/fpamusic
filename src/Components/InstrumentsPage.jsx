import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { Instruments } from "../Modules/instruments";
import { Utils } from "../Modules/utils";
import AudioContext from "../Context/AudioContext";
import imgBongos from "../Images/bongos_1s.jpg";
import imgDarbuka from "../Images/darbuka_1s.jpg";
import imgDrums from "../Images/drums_1s.jpg";
import imgGuitar from "../Images/guitar_1s.jpg";
import imgKalimba from "../Images/kalimba_1s.jpg";
import imgPiano from "../Images/piano_1s.jpg";
import imgRecorder from "../Images/recorder_1s.jpg";
import imgTongueDrum from "../Images/tongue_drum_1s.jpg";
import imgVoice from "../Images/voice_1s.jpg";
import "./assets/css/style.css";

function InstrumentsPage() {
  const [search, setSearch] = useState("");
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
      case "bongos":
        result = imgBongos;
        break;
      case "darbuka":
        result = imgDarbuka;
        break;
      case "drums":
        result = imgDrums;
        break;
      case "guitar":
        result = imgGuitar;
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

  const searchChanged = (event) => {
    setSearch(event.target.value);
  };

  function searchText(instr) {
    let found = true;
    if (search !== "") {
      const info = instruments.getInfo(instr);
      const text = info.generalInfo.toLowerCase();
      found = text.includes(search.toLowerCase());
    }
    return found;
  }

  return (
    <div className="bg-dark text-light">
      <header className="d-flex justify-content-start">
        <Logo />
        <div>
          <NavBar />
          <h1>Instruments</h1>
          <div>
            <input
              className="search"
              placeholder="Search"
              type="text"
              value={search}
              onChange={searchChanged}
            />
          </div>
        </div>
      </header>
      <main>
        <div className="ms-3 me-4 mt-4 d-flex gap-3 flex-wrap justify-content-center justify-content-md-start ">
          {instrumentList.map((item) => {
            if (searchText(item)) {
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
                      {Utils.removeChars(
                        Utils.partOfString(
                          instruments.getInfo(item).generalInfo,
                          100
                        ),
                        "[]♫"
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
            } else {
              return "";
            }
          })}
        </div>
      </main>
    </div>
  );
}

export default InstrumentsPage;

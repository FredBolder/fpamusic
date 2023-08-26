import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import "./assets/css/style.css";
import { Instruments } from "../Modules/instruments";
import { Utils } from "../Modules/utils";

function InstrumentsPage() {
  const instruments = new Instruments();
  const instrumentList = instruments.getInstrumentList();
  //const drums = instruments.getInfo("drums");
  //const info =drums.generalInfo;

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
        <div className="mt-3 d-flex gap-3">
        {instrumentList.map((item) => {
          return (
            <div key={item} className="card text-bg-secondary" style={{width: "18rem"}}>
              <img src={instruments.getImage(item)} className="card-img-top" alt={item} />
              <div className="card-body">
                <h5 className="card-title">{item}</h5>
                <p className="card-text">
                  {Utils.partOfString(instruments.getInfo(item).generalInfo, 100)}
                </p>
                <a href="#" className="btn btn-primary">
                  Read more
                </a>
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

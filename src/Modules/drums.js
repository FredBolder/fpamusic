import { Instrument } from "./instrument.js";

class Drums extends Instrument {
  constructor() {
    super();
    this.generalInfo = "A drum set is a collection of drums and cymbals. ";
    this.generalInfo +=
      "A standard drum set normally consists of a bass drum, a snare drum, ";
    this.generalInfo +=
      "one or more toms, a hi-hat, a crash cymbal and a ride cymbal.";
    this.generalInfo +=
      "Before the existence of a drum set, different percussionists were ";
    this.generalInfo += "playing the separate drums.";
    this.generalInfo +=
      "In addition to acoustic drums, there are also electronic drums and ";
    this.generalInfo += "they are getting better and better.";
    this.info = {
      name: "Drums",
      category: "Percussion",
      generalInfo: this.generalInfo,
      links: {
        general: [
          "https://en.wikipedia.org/wiki/Drum_kit, Drum kit - Wikipedia",
        ],
        virtual: [
          "https://www.virtualdrumming.com/",
          "https://www.musicca.com/drums",
        ],
      },
    };
  }

  getInfo() {
    return this.info;
  }
}

export { Drums };

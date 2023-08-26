import { Piano } from "./piano.js";
import { Drums } from "./drums.js";
import { Kalimba } from "./kalimba.js";
import { Recorder } from "./recorder.js";
import { Voice } from "./voice.js";

import imgDrums from "../Images/drums01.jpg";
import imgKalimba from "../Images/drums01.jpg";
import imgPiano from "../Images/piano01.jpg";
import imgRecorder from "../Images/recorder01.jpg";
import imgVoice from "../Images/drums01.jpg";

class Instruments {
  constructor() { }

  getInfo(instrument) {
    let result = null;
    if (typeof instrument !== "string") {
      throw new Error("Invalid type");
    }
    const instrumentNameLower = instrument.toLowerCase();

    // This function returns the corresponding instrument object.
    switch (instrumentNameLower) {
      case "drums":
        result = new Drums();
        break;
      case "kalimba":
        result = new Kalimba();
        break;
      case "piano":
        result = new Piano();
        break;
      case "recorder":
        result = new Recorder();
        break;
      case "voice":
        result = new Voice();
        break;
      // Add more cases for other instruments.
      default:
        result = null;
        break;
    }
    if (result !== null) {
      result = result.getInfo();
    }

    return result;
  }

  getImage(instrument) {
    let result = null;
    const instrumentNameLower = instrument.toLowerCase();
    switch (instrumentNameLower) {
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
      case "voice":
        result = imgVoice;
        break;
      // Add more cases for other instruments.
      default:
        result = null;
        break;
    }
    return result;
  }

  getInstrumentList() {
    return ["Drums", "Kalimba", "Piano", "Recorder", "Voice"];
  }

  getLinkCategories(links) {
    let categories = [];
    const keys = Object.keys(links);
    for (const key of keys) {
      if (links[key].length > 0) {
        categories.push(key);
      }
    }

    return categories;
  }



}

export { Instruments };

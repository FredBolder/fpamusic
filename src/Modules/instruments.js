import { Piano } from "./piano.js";
import { Drums } from "./drums.js";
import { Recorder } from "./recorder.js";
import { Voice } from "./voice.js";

class Instruments {
  constructor() { }

  getInfo(instrument) {
    // The instrument parameter must have the type string.
    let result = null;
    if (typeof instrument !== "string") {
      throw new Error("Not valid input, please try again!");
    }
    // The result must be case independent.
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

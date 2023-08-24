import { Piano } from "./piano.js";
import { Drums } from "./drums.js";
import { Utils } from "./utils.js";
import { Instrument } from "./instrument.js";

class Instruments {
  constructor() {}

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
      case "piano":
        result = new Piano();
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
    return ["Drums", "Piano", "Recorder"];
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

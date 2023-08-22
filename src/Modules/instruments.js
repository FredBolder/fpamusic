import { Instrument } from "./instrument.js";
import { Piano } from "./piano.js";
import { Drums } from "./drums.js";

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
}

export { Instruments };

import { Bongos } from "./bongos.js";
import { Darbuka } from "./darbuka.js";
import { Drums } from "./drums.js";
import { Guitar } from "./guitar.js";
import { Kalimba } from "./kalimba.js";
import { Melodica } from "./melodica.js";
import { Piano } from "./piano.js";
import { Recorder } from "./recorder.js";
import { Tin_whistle } from "./tin_whistle.js";
import { Tongue_drum } from "./tongue_drum.js";
import { Ukulele } from "./ukulele.js";
import { Voice } from "./voice.js";

class Instruments {
  getArticles(info) {
    let result = [];
    if (info.hasOwnProperty("articles")) {
      const keys = Object.keys(info.articles);
      for (const key of keys) {
        result.push(key);
      }
    }
    return result;
  }

  getInfo(instrument) {
    let result = null;
    if (typeof instrument !== "string") {
      throw new Error("Invalid type");
    }
    const instrumentNameLower = instrument.toLowerCase();

    // This function returns the corresponding instrument object.
    switch (instrumentNameLower) {
      case "bongos":
        result = new Bongos();
        break;
      case "darbuka":
        result = new Darbuka();
        break;
      case "drums":
        result = new Drums();
        break;
      case "guitar":
        result = new Guitar();
        break;
      case "kalimba":
        result = new Kalimba();
        break;
      case "melodica":
        result = new Melodica();
        break;
      case "piano":
        result = new Piano();
        break;
      case "recorder":
        result = new Recorder();
        break;
      case "tin whistle":
        result = new Tin_whistle();
        break;
      case "tongue drum":
        result = new Tongue_drum();
        break;
      case "ukulele":
        result = new Ukulele();
        break;
      case "voice":
        result = new Voice();
        break;
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
    return [
      "Bongos",
      "Darbuka",
      "Drums",
      "Guitar",
      "Kalimba",
      "Melodica",
      "Piano",
      "Recorder",
      "Tin whistle",
      "Tongue drum",
      "Ukulele",
      "Voice",
    ];
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

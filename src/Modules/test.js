import { Instruments } from "./instruments.js";
import { Utils } from "./utils.js";

function checkResult(testName, expected, result) {
  if (result !== expected) {
    Utils.log(`*** ${testName} failed!!! ***`);
    Utils.log(`Expected : ${expected}`);
    Utils.log(`Result   : ${result}`);
  }
}

function test() {
  let expected = "";
  let instr = {};
  let instruments = {};
  let result = "";
  let linksToCheck = [];

  instruments = new Instruments();
  instr = instruments.getInfo("dRuMs");
  //Utils.log(instr.generalInfo);
  result = instr.name + ", " + instr.category;
  instr = instruments.getInfo("piaNO");
  result += ", " + instr.name + ", " + instr.category;
  expected = "Drums, Percussion, Piano, Keyboard";
  checkResult("TEST 1A", expected, result);
  checkResult("TEST 1B", null, instruments.getInfo("wrong"));

  checkResult(
    "TEST 2A",
    "Bongos",
    Utils.getStringFromList("Bongos, Kalimba", 0)
  );
  checkResult(
    "TEST 2B",
    "Kalimba",
    Utils.getStringFromList(" Bongos,  Kalimba ", 1)
  );
  checkResult(
    "TEST 2C",
    "Kalimba",
    Utils.getStringFromList(" Bongos,Kalimba ", 1)
  );
  checkResult("TEST 2D", "", Utils.getStringFromList("Bongos, Kalimba", 2));

  const linkObj = {
    general: ["www.google.com, search engine", "www.amazon.com", "www.bild.de"],
    notgeneral: ["www.wheater.com"],
    test: [],
  };

  let categories = instruments.getLinkCategories(linkObj);

  checkResult(
    "TEST 3A",
    ["general", "notgeneral"].toString(),
    categories.toString()
  );

  checkResult(
    "TEST 4A",
    "a b c d e f",
    Utils.underscoresToSpaces("a_b_c_d_e_f")
  );

  checkResult(
    "TEST 4B",
    "a_b_c_d_e_f",
    Utils.spacesToUnderscores("a b c d e f")
  );

  //   const linksToCheck = [
  //     "https://en.wikipedia.org/wiki/Drum_kit",
  //     "https://www.virtualdrumming.com/",
  //     "https://www.musicca.com/drums",
  //     "https://virtualpiano.net/",
  //     "https://www.musicca.com/piano",
  //     "https://www.youtube.com/playlist?list=PLrNNL05e9FT9UnPiTktveaPrye0exDY9N",
  //     "https://en.wikipedia.org/wiki/Recorder_(musical_instrument)",
  //     "https://professionalcomposers.com/flute-vs-recorder/",
  //     "https://americanrecorder.org/recorder_fingering_charts.php",
  //     "https://www.doctormusik.com/apps-and-games/virtual-recorder/",
  //     "https://www.youtube.com/@Team_Recorder",
  // ];

  //   checkResult(
  //     "TEST 5A",
  //     [
  //       { link: "https://en.wikipedia.org/wiki/Drum_kit", isValid: true },
  //       { link: "https://www.virtualdrumming.com/", isValid: true },
  //       { link: "https://www.musicca.com/drums", isValid: true },
  //       { link: "https://virtualpiano.net/", isValid: true },
  //       { link: "https://www.musicca.com/piano", isValid: true },
  //       {
  //         link: "https://www.youtube.com/playlist?list=PLrNNL05e9FT9UnPiTktveaPrye0exDY9N",
  //         isValid: true,
  //       },
  //       {
  //         link: "https://en.wikipedia.org/wiki/Recorder_(musical_instrument)",
  //         isValid: true,
  //       },
  //       {
  //         link: "https://professionalcomposers.com/flute-vs-recorder/",
  //         isValid: true,
  //       },
  //       {
  //         link: "https://americanrecorder.org/recorder_fingering_charts.php",
  //         isValid: true,
  //       },
  //       {
  //         link: "https://www.doctormusik.com/apps-and-games/virtual-recorder/",
  //         isValid: true,
  //       },
  //       { link: "https://www.youtube.com/@Team_Recorder", isValid: true },
  //     ]
  //     //Utils.checkLinksValidity(linksToCheck)
  //   );

  const instrumentList = instruments.getInstrumentList();
  for (let i = 0; i < instrumentList.length; i++) {
    const instrumentObj = instruments.getInfo(instrumentList[i]);
    if (instrumentObj === null) {
      Utils.log(`The ${instrumentList[i]} object does not exist!`);
    } else {
      Utils.log(instrumentObj.name);
      const instrumentLinks = instrumentObj.links;
      const linkCategories = instruments.getLinkCategories(instrumentLinks);
      for (let j = 0; j < linkCategories.length; j++) {
        const linkCategory = linkCategories[j];
        
      }
      Utils.log(linkCategories);

      //   linksToCheck.push(instrumentLinks.general.toString())
    }
  }
  Utils.log(linksToCheck);
}

test();

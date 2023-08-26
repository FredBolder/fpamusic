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

}

test();

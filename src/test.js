import { Instruments } from "./Modules/instruments.js";
import { Utils } from "./Modules/utils.js";

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

  checkResult(
    "TEST 5A",
    "This is test!",
    Utils.removeChars("(This) [is] <test>!", "()[]<>")
  );

  checkResult(
    "TEST 5B",
    "Snaredrum",
    Utils.removeChars("Snare drum", " ")
  );

  checkResult(
    "TEST 5C",
    "BCD",
    Utils.removeChars("BCD", "A")
  );

  checkResult(
    "TEST 6A",
    "bass drum",
    Utils.getWordBetweenBrackets("This is a [bass drum]", 11)
  );

  checkResult(
    "TEST 6B",
    "bass drum",
    Utils.getWordBetweenBrackets("This is a [bass drum]!", 20)
  );

  checkResult(
    "TEST 6C",
    "tek",
    Utils.getWordBetweenBrackets("The [doum], [tek] and [ka] are the main strokes.", 14)
  );

  checkResult(
    "TEST 6D",
    "",
    Utils.getWordBetweenBrackets("The [doum], [tek] and [ka] are the main strokes.", 11)
  );

  const infoObj = {
    name: "Drums",
    articles: {
      nice_article: "This is a nice article!!",
      another_article: "This is another article.",
    },
  };
  result = instruments.getArticles(infoObj);
  expected = ["nice_article,another_article"];
  checkResult("TEST 7A", expected.toString(), result.toString());
  if (result.length > 0) {
    //Utils.log(infoObj.articles[result[0]]);
  }

  linksToCheck = [];
  const instrumentList = instruments.getInstrumentList();
  for (let i = 0; i < instrumentList.length; i++) {
    const instrumentObj = instruments.getInfo(instrumentList[i]);
    if (instrumentObj === null) {
      Utils.log(`The ${instrumentList[i]} object does not exist!`);
    } else {
      const instrumentLinks = instrumentObj.links;
      const linkCategories = instruments.getLinkCategories(instrumentLinks);
      for (let j = 0; j < linkCategories.length; j++) {
        const linkCategory = linkCategories[j];
        const linkArr = instrumentLinks[linkCategory];
        for (let k = 0; k < linkArr.length; k++) {
          linksToCheck.push(Utils.getStringFromList(linkArr[k], 0));
        }
      }
      
    }
  }
  Utils.checkLinksValidity(linksToCheck);


}

test();

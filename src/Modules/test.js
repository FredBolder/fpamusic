import { Instruments } from "./instruments.js";
import { Utils } from "./utils.js"

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

    instruments = new Instruments();
    instr = instruments.getInfo("dRuMs");
    //Utils.log(instr.generalInfo);
    result = instr.name + ", " + instr.category;
    instr = instruments.getInfo("piaNO");
    result += ", " + instr.name + ", " + instr.category;
    expected = "Drums, Percussion, Piano, Keyboard";
    checkResult("TEST 1A", expected, result);
    checkResult("TEST 1B", null, instruments.getInfo("wrong"));

    checkResult("TEST 2A", "Bongos", Utils.getStringFromList("Bongos, Kalimba", 0));
    checkResult("TEST 2B", "Kalimba", Utils.getStringFromList(" Bongos,  Kalimba ", 1));
    checkResult("TEST 2C", "Kalimba", Utils.getStringFromList(" Bongos,Kalimba ", 1));
    checkResult("TEST 2D", "", Utils.getStringFromList("Bongos, Kalimba", 2));

}

test();

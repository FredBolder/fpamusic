import { Instruments } from "./instruments.js";

function checkResult(testName, expected, result) {
    if (result !== expected) {
        console.log(`*** ${testName} failed!!! ***`);
        console.log(`Expected : ${expected}`);
        console.log(`Result   : ${result}`);
    }
}


function test() {
    let expected = "";
    let instr = {};
    let instruments = {};
    let result = "";

    instruments = new Instruments();
    instr = instruments.getInfo("dRuMs");
    result = instr.name + ", " + instr.category;
    instr = instruments.getInfo("piaNO");
    result += ", " + instr.name + ", " + instr.category;
    expected = "Drums, Percussion, Piano, Keyboard";
    checkResult("TEST 1", expected, result);
}

test();

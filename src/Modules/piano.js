import { Instrument } from "./instrument.js";

class Piano extends Instrument {
    constructor() {
        super();
        this.generalInfo = "A piano is a keyboard instrument."; 
        this.generalInfo += "In addition to acoustic pianos, there are also electronic pianos and "; 
        this.generalInfo += "it is hard to hear the difference."; 
        this.info = {
            name: "Piano",
            category: "Keyboard",
            generalInfo: this.generalInfo,
            links: {
                general: [
                    "https://en.wikipedia.org/wiki/Piano, Piano - Wikipedia"
                ],
                virtual: [
                    "https://virtualpiano.net/",
                    "https://www.musicca.com/piano"
                ],
            }
        };
    }

    getInfo() {
        return this.info;
    }
}

export { Piano };
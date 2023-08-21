import { Instrument } from "./instrument.js";

class Piano extends Instrument {
    constructor() {
        super();
        this.info = {
            name: "Piano",
            category: "Keyboard",
            generalInfo: "",
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
import { Instrument } from "./instrument.js";

class Drums extends Instrument {
    constructor() {
        super();
        this.info = {
            name: "Drums",
            category: "Percussion",
            generalInfo: "",
            links: {
                general: [
                    "https://en.wikipedia.org/wiki/Drum_kit, Drum kit - Wikipedia"
                ],
                virtual: [
                    "https://www.virtualdrumming.com/",
                    "https://www.musicca.com/drums"
                ],
            }
        };
    }

    getInfo() {
        return this.info;
    }
}

export { Drums };
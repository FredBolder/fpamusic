import { Instrument } from "./instrument.js";

class Voice extends Instrument {
    constructor() {
        super();
        this.gi = "Perhaps you would not expect the human voice to be on a musical instruments ";
        this.gi += "website, but you can consider it as an amazing universal instrument. Singing, ";
        this.gi += "whistling and humming are the best known ways to make music with the human ";
        this.gi += " voice, but you can also imitate existing musical instruments like drums ";
        this.gi += " (beatboxing), trumpet etc.";
        this.gi += "";
        this.info = {
            name: "Voice",
            category: "Vocal",
            generalInfo: this.gi,
            links: {
                general: [
                ],
                beginners_lessons: [
                ],
                youtube: [
                    "https://www.youtube.com/shorts/uiX4aQEn5eE, Instruments Sound Imitation"
                ],
            }
        };
    }

}

export { Voice };
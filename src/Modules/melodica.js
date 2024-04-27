import { Instrument } from "./instrument.js";

class Melodica extends Instrument {
    constructor() {
        super();
        this.gi = "A melodica is a wind instrument that features a keyboard. ";
        this.gi += "It is polyphonic which means that you can play more tones at the same time. ";
        this.gi += "";
        this.info = {
            name: "Melodica",
            category: "Wind",
            generalInfo: this.gi,
            links: {
                general: [
                    "https://en.wikipedia.org/wiki/Melodica, Melodica - Wikipedia",
                ],
                beginners_lessons: [
                    "https://www.youtube.com/playlist?list=PLn8WhAo_Dm4GwH2YXcziShKeAjCifmi6p",
                ],
                youtube: [
                    "https://www.youtube.com/@MelodicaAcademy, Melodica Academy",
                    "https://www.youtube.com/@MelodicaMen, Melodica Men",
                ],            }
        };
    }

}

export { Melodica };
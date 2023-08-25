import { Instrument } from "./instrument.js";

class Kalimba extends Instrument {
    constructor() {
        super();
        this.gi = "Kalimba";
        this.gi += "";
        this.info = {
            name: "Kalimba",
            category: "?",
            generalInfo: this.gi,
            links: {
                general: [
                    "https://en.wikipedia.org/wiki/Mbira, Mbira - Wikipedia"
                ],
                beginners_lessons: [
                ],
                articles: [
                ],
                virtual: [
                ],
                youtube: [
                ],
                books: [
                    "https://www.dansblad.nl/rkalimba/, Relaxing Music for KALIMBA - 17 Keys, C Major Scale"
                ],
                software: [
                    "https://www.dansblad.nl/kalimba/"
                ],
            }
        };
    }

}

export { Kalimba };
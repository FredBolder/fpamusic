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
                    "https://en.wikipedia.org/wiki/Mbira, Mbira - Wikipedia",
                    "https://www.wikihow.com/Play-the-Kalimba"
                ],
                beginners_lessons: [
                ],
                articles: [
                ],
                virtual: [
                    "https://middleearmedia.com/kalimba/",
                    "https://www.construct.net/en/free-online-games/kalimba-16747/play",
                    "https://scratch.mit.edu/projects/372197753/",
                    "https://www.youtube.com/watch?v=KCF3HAZj404"
                ],
                youtube: [
                    "https://www.youtube.com/@KalimbaCam"
                ],
                books: [
                    "https://www.dansblad.nl/rkalimba/, Relaxing Music for KALIMBA - 17 Keys, C Major Scale"
                ],
                software: [
                    "https://www.dansblad.nl/kalimba/",
                    "http://ktabs.theirhouse.org/"
                ],
            }
        };
    }

}

export { Kalimba };
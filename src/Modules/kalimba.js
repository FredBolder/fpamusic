import { Instrument } from "./instrument.js";

class Kalimba extends Instrument {
    constructor() {
        super();
        this.gi = "A kalimba, also called thumb piano or mbira is a lamellaphone. ";
        this.gi += "The sound is created by plucking the metal strips (tines) with your thumbs. ";
        this.gi += "Most kalimbas are tuned to a diatonic scale, but there exist also ";
        this.gi += "kalimbas that are tuned to another scale. ";
        this.gi += "if you want to play songs, it is best to have a kalimba that is ";
        this.gi += "tuned to a diatonic scale or a chromatic scale. ";
        this.gi += "You can carefully fine tune a kalimba with a tuning hammer. ";
        this.gi += "To higher a note you have to shorten the part of the tine ";
        this.gi += "after the bridge. ";
        this.gi += "Often it is possible to tune to another scale than the original. ";
        this.gi += "If you find it difficult to tune by ear, you can use a tuning ";
        this.gi += "app in your phone. ";
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
                    "https://www.youtube.com/@EvaAuner",
                    "https://www.youtube.com/@KalimbaCam",
                    "https://www.youtube.com/@EmmyKay"
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
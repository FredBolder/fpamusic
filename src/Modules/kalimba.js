import { Instrument } from "./instrument.js";

class Kalimba extends Instrument {
    constructor() {
        super();
        this.gi = `A kalimba, also called thumb piano or mbira is a lamellaphone.
        The sound is created by plucking the metal strips (tines) with your thumbs.
        Most kalimbas are tuned to a diatonic scale, but there exist also
        kalimbas that are tuned to another scale.
        if you want to play songs, it is best to have a kalimba that is
        tuned to a diatonic scale or a chromatic scale.
        You can carefully fine tune a kalimba with a tuning hammer.
        To higher a note you have to shorten the part of the tine
        after the bridge.
        Often it is possible to tune to another scale than the original.
        If you find it difficult to tune by ear, you can use a tuning
        app in your phone.`;
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
                    "https://www.youtube.com/watch?v=knWemwE3ZZU",
                    "https://www.youtube.com/playlist?list=PL6w-y_q2Tsl8ivqx_LuBtnI6kw4QpUy7Q"
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
import { Instrument } from "./instrument.js";

class Recorder extends Instrument {
    constructor() {
        super();
        this.gi = "A recorder is a woodwind instrument. ";
        this.gi += "You might think that you can not tune a recorder, but if you ";
        this.gi += "blow harder the pitch will be higher and if you blow softer the ";
        this.gi += "pitch will be lower. You can also lower the pitch by pulling the ";
        this.gi += "mouthpiece a little out. ";
        this.gi += "";
        this.info = {
            name: "Recorder",
            category: "Woodwind",
            generalInfo: this.gi,
            links: {
                general: [
                    "https://en.wikipedia.org/wiki/Recorder_(musical_instrument), Recorder - Wikipedia"
                ],
                beginners_lessons: [
                    "https://www.youtube.com/watch?v=-d6uVjIEkMY, First lesson",
                    "https://www.youtube.com/playlist?list=PLYVfQ47cCHaCRrSS8jeNptYyXGx3DqPtH"
                ],
                articles: [
                    "https://professionalcomposers.com/flute-vs-recorder/, Flute vs Recorder"
                ],
                fingering: [
                    "https://americanrecorder.org/recorder_fingering_charts.php"
                ],
                virtual: [
                    "https://www.doctormusik.com/apps-and-games/virtual-recorder/"
                ],
                youtube: [
                    "https://www.youtube.com/@Team_Recorder"
                ],
                books: [
                    "http://www.dansblad.nl/brrecorder/, Ballroom & Latin Dances for Soprano Recorder",
                    "http://www.dansblad.nl/grrecorder/, Greek Dances for Soprano Recorder"
                ],
            }
        };
    }

}

export { Recorder };
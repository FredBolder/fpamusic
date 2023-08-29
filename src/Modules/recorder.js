import { Instrument } from "./instrument.js";

class Recorder extends Instrument {
    constructor() {
        super();
        this.gi = "A recorder is a woodwind instrument. ";
        this.gi += "There are two fingering systems: Baroque (English) and German. ";
        this.gi += "The German system was later created to make it easier for beginners ";
        this.gi += "to learn. You can recognize a German recorder by the small fifth ";
        this.gi += "hole that is smaller than the fourth hole. ";
        this.gi += "The scale of C is very easy to play on a German recorder, ";
        this.gi += "but the fingering for sharps and flats is often more difficult. ";
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
                    "https://en.wikipedia.org/wiki/Recorder_(musical_instrument), Recorder - Wikipedia",
                    "https://en.wikipedia.org/wiki/Soprano_recorder,  Soprano recorder - Wikipedia"
                ],
                beginners_lessons: [
                    "https://www.youtube.com/watch?v=-d6uVjIEkMY, First lesson",
                    "https://www.youtube.com/playlist?list=PLYVfQ47cCHaCRrSS8jeNptYyXGx3DqPtH",
                    "https://www.youtube.com/watch?v=z4tLQ09_YZE, All notes"
                ],
                articles: [
                    "https://professionalcomposers.com/flute-vs-recorder/, Flute vs Recorder",
                    "https://hub.yamaha.com/winds/wood/recorders-baroque-vs-german/, Baroque vs German"
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
                funny: [
                    "https://www.youtube.com/@Rec0rderMast3r"
                ]
            }
        };
    }

}

export { Recorder };
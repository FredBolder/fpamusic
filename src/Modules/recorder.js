import { Instrument } from "./instrument.js";

class Recorder extends Instrument {
    constructor() {
        super();
        this.generalInfo = "A recorder is a woodwind instrument. ";
        this.generalInfo += "You might think that you can not tune a recorder, but if you ";
        this.generalInfo += "blow harder the pitch will be higher and if you blow softer the ";
        this.generalInfo += "pitch will be lower. You can also lower the pitch by pulling the ";
        this.generalInfo += "mouthpiece a little out. ";
        this.generalInfo += "";
        this.info = {
            name: "Recorder",
            category: "Woodwind",
            generalInfo: this.generalInfo,
            links: {
                general: [
                    "https://en.wikipedia.org/wiki/Recorder_(musical_instrument), Recorder - Wikipedia"
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
            }
        };
    }

    getInfo() {
        return this.info;
    }
}

export { Recorder };
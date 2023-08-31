import { Instrument } from "./instrument.js";

class Bongos extends Instrument {
    constructor() {
        super();
        this.gi = "Bongos consist of a small drum (macho) and a slightly larger drum (hembra) ";
        this.gi += "which are joined by a wooden bridge. They are mostly played with both hands ";
        this.gi += "and held between the legs. They can also be played with sticks. In that ";
        this.gi += "case, they are mostly mounted on a stand. ";
        this.gi += "There are many different possible strokes. ";
        this.gi += "The most known rhythm is the Martillo which is used in Salsa and Bolero ";
        this.gi += "music.";
        this.gi += "";
        this.info = {
            name: "Bongos",
            category: "Percussion",
            generalInfo: this.gi,
            links: {
                general: [
                    "https://en.wikipedia.org/wiki/Bongo_drum, Bongo drum - Wikipedia"
                ],
                beginners_lessons: [
                    "https://www.youtube.com/watch?v=zEJpZxJDbLU",
                    "https://www.youtube.com/watch?v=uwUPgi3zRfQ, Martillo pattern",
                    "https://www.youtube.com/watch?v=zPgl8l7sjnw"
                ],
                articles: [
                    "https://drumhelper.com/percussion/how-to-tune-bongos/, How to tune bongos"
                ],
                youtube: [
                ],
            }
        };
    }

}

export { Bongos };
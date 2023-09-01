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
        this.gi += "music. ";
        this.gi += "There are also bongo cajons. They can not be tuned which is handy, but this ";
        this.gi += "can also be a disadvantage. A bongo cajon has a playing surface instead of ";
        this.gi += "a skin. ";
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
                    "https://www.youtube.com/watch?v=zPgl8l7sjnw",
                    "https://www.youtube.com/playlist?list=PLTwhF6o6ffnnI9EIk-72PFDJtEoOleir5"
                ],
                articles: [
                    "https://drumhelper.com/percussion/how-to-tune-bongos/, How to tune bongos"
                ],
                youtube: [
                    "https://www.youtube.com/watch?v=Ifie72AL66k"
                ],
            }
        };
    }

}

export { Bongos };
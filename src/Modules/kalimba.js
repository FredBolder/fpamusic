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
                ],
            }
        };
    }

}

export { Kalimba };
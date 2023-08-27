import { Instrument } from "./instrument.js";

class Tongue_drum extends Instrument {
    constructor() {
        super();
        this.gi = "Tongue drum";
        this.gi += "";
        this.info = {
            name: "Tongue drum",
            category: "Percussion",
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
                software: [
                ],
            }
        };
    }

}

export { Tongue_drum };
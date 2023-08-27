import { Instrument } from "./instrument.js";

class Darbuka extends Instrument {
    constructor() {
        super();
        this.gi = "Darbuka";
        this.gi += "";
        this.info = {
            name: "Darbuka",
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

export { Darbuka };
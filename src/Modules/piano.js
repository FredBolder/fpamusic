import { Instrument } from "./instrument.js";

class Piano extends Instrument {
    constructor() {
        super();
        this.gi = `A piano is a keyboard instrument. Normally there are black and white keys
        and the black keys are raised above the white keys.
        The acoustic piano types are the grand piano and the upright piano.
        The sound quality of a grand piano is better, but for an upright piano
        there is less space needed.
        In addition to acoustic pianos, there are also electronic pianos and
        it is hard to hear the difference`;
        this.info = {
            name: "Piano",
            category: "Keyboard",
            generalInfo: this.gi,
            links: {
                general: [
                    "https://en.wikipedia.org/wiki/Piano, Piano - Wikipedia",
                    "https://www.flowkey.com/en/piano-guide, The best guide to learning piano"
                ],
                beginners_lessons: [
                    "https://www.youtube.com/watch?v=4SXQ_wlbWog, First lesson",
                    "https://www.youtube.com/watch?v=gEI7uYOCQXo, How to read notes"
                ],
                virtual: [
                    "https://virtualpiano.net/",
                    "https://www.musicca.com/piano"
                ],
                youtube: [
                    "https://www.youtube.com/playlist?list=PLrNNL05e9FT9UnPiTktveaPrye0exDY9N",
                    "https://www.youtube.com/@michaelkeithson, Michael Keithson"
                ],
                tools: [
                    "https://fredbolder.github.io/transpose/, Transpose"
                ],
                books: [
                    "https://www.dansblad.nl/brpiano/, Ballroom & Latin Dance Rhythms for Piano",
                    "https://www.dansblad.nl/grpiano/, Greek Dance Rhythms for Piano"
                ],
            }
        };
    }

}

export { Piano };
import { Instrument } from "./instrument.js";

class Piano extends Instrument {
    constructor() {
        super();
        this.generalInfo = "A piano is a keyboard instrument. Normally there are black and white keys "; 
        this.generalInfo += "and the black keys are raised above the white keys. "; 
        this.generalInfo += "The acoustic piano types are the grand piano and the upright piano. "; 
        this.generalInfo += "The sound quality of a grand piano is better, but for an upright piano "; 
        this.generalInfo += "there is less space needed. "; 
        this.generalInfo += "In addition to acoustic pianos, there are also electronic pianos and "; 
        this.generalInfo += "it is hard to hear the difference."; 
        this.info = {
            name: "Piano",
            category: "Keyboard",
            generalInfo: this.generalInfo,
            links: {
                general: [
                    "https://en.wikipedia.org/wiki/Piano, Piano - Wikipedia"
                ],
                virtual: [
                    "https://virtualpiano.net/",
                    "https://www.musicca.com/piano"
                ],
                youtube: [
                    "https://www.youtube.com/playlist?list=PLrNNL05e9FT9UnPiTktveaPrye0exDY9N"
                ],
            }
        };
    }

    getInfo() {
        return this.info;
    }
}

export { Piano };
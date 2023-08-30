import { Instrument } from "./instrument.js";

class Darbuka extends Instrument {
    constructor() {
        super();
        this.gi = "A darbuka is a goblet shaped drum. It is known under many other ";
        this.gi += "names like globet drum, doumbek and τουμπερλέκι (toumperleki). ";
        this.gi += "There are many different possible strokes, but the main strokes are ";
        this.gi += "called [doum] (or dum), [tek] and [ka].";
        this.gi += "The doum is the bass sound that is made by hitting the center of the ";
        this.gi += "membrane with your strong hand (closed fingers). The tek is the high ";
        this.gi += "sound that is made by hitting the edge with your weak hand (fingers ";
        this.gi += "apart). You can use one or more fingers. ";
        this.gi += "The ka sounds like the tek, but it is made by hitting the edge ";
        this.gi += "with the ring finger of the relaxed weak hand. ";
        this.gi += "With the doum, tek and ka strokes, the hand must bounce back. ";
        this.gi += "Keep in mind that there are other techniques as well. ";
        this.gi += "";
        this.info = {
            name: "Darbuka",
            category: "Percussion",
            generalInfo: this.gi,
            links: {
                general: [
                    "https://en.wikipedia.org/wiki/Goblet_drum, Globet drum - Wikipedia"
                ],
                beginners_lessons: [
                    "https://www.youtube.com/watch?v=O9GNdshDWsE",
                    "https://www.youtube.com/watch?v=Sbjs39b_MT8"
                ],
                articles: [
                ],
                youtube: [
                    "https://www.youtube.com/watch?v=eLpablRicOc&list=PLqGdXZpmhZrw1FkmhxeqCgdBb2u7D6PjT"
                ],
            }
        };
    }

}

export { Darbuka };
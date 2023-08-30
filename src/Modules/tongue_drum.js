import { Instrument } from "./instrument.js";

class Tongue_drum extends Instrument {
    constructor() {
        super();
        this.gi = "Tongue drum";
        this.gi += "A steel tongue drum is a tuned drum that procudes a bell-like sound when ";
        this.gi += "played with mallets or fingers. It is also called tank drum, hank drum or ";
        this.gi += "even UFO drum (because of the shape). ";
        this.gi += "Tongue drums are often tuned to a pentatonic scale. The advantage of a ";
        this.gi += "pentatonic scale is that no matter what you play, it mostly will sound ";
        this.gi += "good. The disadvantage is that for a lot of songs you need more notes, ";
        this.gi += "so if you want to play songs, it is better to have a tongue drum that is ";
        this.gi += "tuned to a diatonic scale or a chromatic scale. ";
        this.gi += "The tongues of a tongue drum are often numbered and there exist tabs with ";
        this.gi += "nummers which makes it easy to play music for people who can not read ";
        this.gi += "sheet music. ";
        this.gi += "There are tongue drums that are tuneable by placing special tuning magnets.";
        this.gi += "";
        this.info = {
            name: "Tongue drum",
            category: "Percussion",
            generalInfo: this.gi,
            links: {
                general: [
                    "https://en.wikipedia.org/wiki/Steel_tongue_drum, Steel tongue drum - Wikipedia",
                    "https://dorhymi.com/how-to-play-steel-tongue-drum/"
                ],
                beginners_lessons: [
                    "https://www.youtube.com/watch?v=VT6l8pl7xdQ"
                ],
                articles: [
                ],
                virtual: [
                    "https://www.oriondrum.com/virtual-player"
                ],
                youtube: [
                    "https://www.youtube.com/@SimpleTankDrum"
                ],
                books: [
                    "http://www.dansblad.nl/rtdrum/, Relaxing Music for Tongue Drum",
                    "http://www.dansblad.nl/rtdrum2/, Relaxing Music 2 for Tongue Drum",
                    "http://www.dansblad.nl/wtdrum/, Waltzes for Tongue Drum"
                ],
            }
        };
    }

}

export { Tongue_drum };
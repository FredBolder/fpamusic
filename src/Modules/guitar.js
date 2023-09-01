import { Instrument } from "./instrument.js";

class Guitar extends Instrument {
    constructor() {
        super();
        this.gi = "A Guitar has normally six strings and is tuned from low to high ";
        this.gi += "E A D G B E. When the guitar is held against the body, the string ";
        this.gi += "with the lowest note is above. The sound is produced by plucking ";
        this.gi += "or strumming the strings. ";
        this.gi += "";
        this.gi += "";
        this.gi += "";
        this.gi += "";
        this.gi += "";
        this.info = {
            name: "Guitar",
            category: "Chordophones",
            generalInfo: this.gi,
            links: {
                general: [
                    "https://en.wikipedia.org/wiki/Guitar, Guitar - Wikipedia"
                ],
                beginners_lessons: [
                    "https://www.youtube.com/playlist?list=PL-RYb_OMw7GfqsbipaR65GDDzA1rP5deq"
                ],
                chords: [
                    "https://www.all-guitar-chords.com/"
                ],
                articles: [
                    "https://www.theguitarlesson.com/guitar-lesson-blog/beginner-guitar-lessons/guitar-string-mnemonic-acronyms/"
                ],
                youtube: [
                    "https://www.youtube.com/watch?v=jJxRjWtwmEE, Tuning a Guitar",
                    "https://www.youtube.com/watch?v=HQBKP2uStcE, The Notes"
                ],
            }
        };
    }

}

export { Guitar };
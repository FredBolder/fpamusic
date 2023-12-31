import { Instrument } from "./instrument.js";

class Guitar extends Instrument {
    constructor() {
        super();
        this.gi = "A Guitar has normally six strings and is tuned from low to high ";
        this.gi += "E A D G B E (open strings). When the guitar is held against the body, ";
        this.gi += "the string with the lowest note is above. The sound is produced by ";
        this.gi += "plucking or strumming the strings with the strong hand. Pressing ";
        this.gi += "a string with the weak hand, shortens the string's vibrating length ";
        this.gi += "resulting in a higher pitch. The frets (thin strips) make it easy to ";
        this.gi += "play the correct notes. Each fret represents one semitone, so pressing ";
        this.gi += "the E string behind the first fret, results in a F. ";
        this.gi += "To avoid damaging your nails, you can use a plectrum (pick) to pluck or ";
        this.gi += "strum the snares. Using a plectrum results also in a different sound. ";
        this.gi += "Guitars are often used to accompany a singer. The singer can of course ";
        this.gi += "be the same person that is playing the guitar. Not every singer has the ";
        this.gi += "same range, so you might need to play in another key. In that case a ";
        this.gi += "capo is very handy. It clamps to the instrument's neck and holds down all ";
        this.gi += "the strings behind a fret. This way you can play in the same way, but ";
        this.gi += "all notes are transposed up. If you don't have a capo, you can also play ";
        this.gi += "only barre chords, but they are not that easy. ";
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
                tuning: [
                    "https://www.youtube.com/watch?v=eJpZrM1_xxo",
                    "https://www.youtube.com/watch?v=jJxRjWtwmEE",
                    "https://www.youtube.com/watch?v=nlBCYCdY-Z4"
                ],
                songs: [
                    "https://www.ultimate-guitar.com/"
                ],
                chords: [
                    "https://www.all-guitar-chords.com/",
                    "https://www.guitarchordsworld.com/",
                    "https://www.learnandmaster.com/guitar-blog/gibsons-learn-master-guitar/barre-chord-magic-for-guitar"
                ],
                articles: [
                    "https://www.theguitarlesson.com/guitar-lesson-blog/beginner-guitar-lessons/guitar-string-mnemonic-acronyms/"
                ],
                youtube: [
                    "https://www.youtube.com/watch?v=HQBKP2uStcE, The Notes"
                ],
            }
        };
    }

}

export { Guitar };
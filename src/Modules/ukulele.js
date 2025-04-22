import { Instrument } from "./instrument.js";

class Ukulele extends Instrument {
    constructor() {
        super();
        this.a1 = `The chord diagrams are for Ukuleles with an G C E A tuning.`;
        this.a2 = `Behind some chords, there is an enharmonic equivalent in parentheses, which is more commonly known.`;
        this.a3 = `Behind some chords, there is an enharmonic equivalent in parentheses, which is more commonly known.`;
        this.a4 = `Chord progressions are often notated with Roman numerals, which makes them key-independent.
        Below every progression, there is an example with chords in a certain key, but the progressions can be transposed 
        to any key.`;
        this.gi = `An Ukulele has normally four strings and is tuned from top to bottom (playing position)
        G4 C4 E4 A4 (open strings). The strings are numbered from bottom to top, so string 1 is the A string.
        The pitch of string 3 (C) is the lowest, unless it is a low G ukulele. String 4 on a
        low G ukulele is tuned to G3, so one octave lower.
        The sound is produced by plucking or strumming the strings with the strong hand. Pressing
        a string with the weak hand, shortens the string's vibrating length
        resulting in a higher pitch. The frets (thin strips) make it easy to
        play the correct notes. Each fret represents one semitone, so pressing
        the E string behind the first fret, results in an F.
        To avoid damaging your nails, you can use a plectrum (pick) to pluck or
        strum the snares. Using a plectrum results also in a different sound.`;
        this.info = {
            name: "Ukulele",
            category: "Chordophones",
            generalInfo: this.gi,
            articles: {
                ukulele_basic_chords: this.a1,
                chords_in_major_keys: this.a2,
                chords_in_minor_keys: this.a3,
                chord_progressions_for_different_emotions: this.a4,
            },
            links: {
                general: [
                    "https://en.wikipedia.org/wiki/Ukulele, Ukulele - Wikipedia",
                    "https://ukebuddy.com/"
                ],
                beginners_lessons: [
                    "https://www.youtube.com/playlist?list=PLlwfspJqZ125opjcbC3f1W9-TQ18wY7K3"
                ],
                chords: [
                    "https://ukulelespace.com/chords",
                    "https://ukulele-chords.com/",
                    "https://www.khmerchords.com/resources/ukulele-chords/",
                    "https://fredbolder.github.io/transpose/",
                    "https://ukuleletricks.com/ukulele-chords/",
                    "https://ukelib.com/"
                ],
            }
        };
    }

}

export { Ukulele };
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
        this.gi = `An ukulele (also called uke) is a string instrument with normally four strings. 
        The most common sizes from small to large are soprano, concert, tenor, and baritone.
        The soprano, concert and tenor ukulele are mostly tuned from top to bottom G4 C4 E4 A4 (open strings). 
        The strings are numbered from bottom to top, so string 1 is the A string.
        The pitch of string 3 (C) is the lowest, unless it is a low G ukulele. String 4 on a
        low G ukulele is tuned to G3, so one octave lower.
        A baritone ukulele is normally tuned to D3 G3 B3 E4, which is the same as the four highest strings of a standard guitar. 
        The sound is produced by plucking or strumming the strings with the strong hand. Pressing
        a string with the weak hand, shortens the string's vibrating length
        resulting in a higher pitch. The frets (thin strips) make it easy to
        play the correct notes. Each fret represents one semitone, so pressing
        the E string behind the first fret, results in an F.
        To avoid damaging your nails, you can use a plectrum (pick) to pluck or
        strum the snares. Using a plectrum results also in a different sound.
        Ukulele plectrums are normally made from felt, leather or rubber. You can 
        also use guitar plectrums that are normally made from plastic, but you have 
        to be careful not to damage your instrument.`;
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
                tuning: [
                    "https://learnplayuke.com/different-types-of-uke-tunings/",
                    "https://www.youtube.com/watch?v=2VOuRBjmzAM",
                    "https://www.youtube.com/watch?v=7xKTKjwGCVg",
                    "https://www.youtube.com/watch?v=i13Ln0CRlbM"
                ],
                chords: [
                    "https://fredbolder.github.io/transpose/",
                    "https://ukulelespace.com/chords",
                    "https://ukulele-chords.com/",
                    "https://www.khmerchords.com/resources/ukulele-chords/",
                    "https://ukuleletricks.com/ukulele-chords/",
                    "https://ukelib.com/"
                ],
                youtube: [
                    "https://www.youtube.com/@Ukelikethepros",
                    "https://www.youtube.com/@TheUkuleleFool"
                ],
            }
        };
    }

}

export { Ukulele };
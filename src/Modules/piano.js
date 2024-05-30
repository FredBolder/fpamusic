import { Instrument } from './instrument.js';

class Piano extends Instrument {
    constructor() {
        super();
        this.a1 = `An acoustic piano usually has 88 keys, including 52 white keys and 36 black keys, which is a 
        little more than 7 octaves.
        The black keys are flat and sharp notes. They are arranged in groups of two and three. To the left 
        of two black keys, there is always a C note.
        Playing further to the right on the keyboard results in higher notes. 
        In the past, the key colors were reversed, so the white keys were raised above the black keys. 
        The choice of that design was based on cost, material availability, and aesthetic considerations.
        For the white keys, ivory was mostly used, while ebony was mainly used for the black keys.
        Later the colors were reversed for better visibility. When the black keys were separated by black
        space, they blended together and were difficult to see.`;
        this.a2 = `Behind some chords, there is an enharmonic equivalent in parentheses, which is more commonly known.`;
        this.a3 = `Behind some chords, there is an enharmonic equivalent in parentheses, which is more commonly known.`;
        this.gi = `A piano is a keyboard instrument. Normally there are black and white keys
        and the black keys are raised above the white keys.
        The acoustic piano types are the grand piano and the upright piano.
        The sound quality of a grand piano is better, but for an upright piano
        there is less space needed.
        In addition to acoustic pianos, there are also electronic pianos and
        it is hard to hear the difference`;
        this.info = {
            name: 'Piano',
            category: 'Keyboard',
            generalInfo: this.gi,
            articles: {
                notes_on_a_piano_keyboard: this.a1,
                chords_in_major_keys: this.a2,
                chords_in_minor_keys: this.a3,
            },
            links: {
                general: [
                    'https://en.wikipedia.org/wiki/Piano, Piano - Wikipedia',
                    'https://www.flowkey.com/en/piano-guide, The best guide to learning piano',
                ],
                beginners_lessons: [
                    'https://www.youtube.com/watch?v=4SXQ_wlbWog, First lesson',
                    'https://www.youtube.com/watch?v=gEI7uYOCQXo, How to read notes',
                ],
                virtual: [
                    'https://virtualpiano.net/',
                    'https://www.musicca.com/piano',
                ],
                youtube: [
                    'https://www.youtube.com/playlist?list=PLrNNL05e9FT9UnPiTktveaPrye0exDY9N',
                    'https://www.youtube.com/@michaelkeithson, Michael Keithson',
                ],
                tools: ['https://fredbolder.github.io/transpose/, Transpose'],
                books: [
                    'https://www.dansblad.nl/brpiano/, Ballroom & Latin Dance Rhythms for Piano',
                    'https://www.dansblad.nl/grpiano/, Greek Dance Rhythms for Piano',
                ],
            },
        };
    }
}

export { Piano };

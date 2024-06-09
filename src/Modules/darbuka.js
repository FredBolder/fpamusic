import { Instrument } from './instrument.js';

class Darbuka extends Instrument {
    constructor() {
        super();
        this.a1 = `D = doum, K = ka, T = tek, Lower case = softer`;
        this.gi = `A darbuka is a goblet shaped drum. It is known under many other
        names like globet drum, doumbek and τουμπερλέκι (toumperleki).
        There are many different possible strokes, but the main strokes are
        called [doum♫] (or dum), [tek♫] and [ka♫].
        The doum is the bass sound that is made by hitting the center of the
        membrane with your strong hand (closed fingers). The tek is the high
        sound that is made by hitting the edge with your weak hand (fingers
        apart). You can use one or more fingers.
        The ka sounds like the tek, but it is made by hitting the edge
        with the ring finger of the relaxed weak hand.
        With the doum, tek and ka strokes, the hand must bounce back.
        Keep in mind that there are other techniques as well.`;
        this.info = {
            name: 'Darbuka',
            category: 'Percussion',
            generalInfo: this.gi,
            articles: {
                darbuka_patterns: this.a1,
            },
            links: {
                general: [
                    'https://en.wikipedia.org/wiki/Goblet_drum, Globet drum - Wikipedia',
                ],
                beginners_lessons: [
                    'https://www.youtube.com/watch?v=O9GNdshDWsE',
                    'https://www.youtube.com/watch?v=Sbjs39b_MT8',
                ],
                patterns: [
                    'https://www.oscarvandillen.com/projects/world_music/darbuka_patterns/',
                ],
                youtube: [
                    'https://www.youtube.com/watch?v=eLpablRicOc&list=PLqGdXZpmhZrw1FkmhxeqCgdBb2u7D6PjT',
                ],
            },
        };
    }
}

export { Darbuka };

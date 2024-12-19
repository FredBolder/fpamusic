import { Instrument } from './instrument.js';

class Tongue_drum extends Instrument {
    constructor() {
        super();
        this.gi = `A steel tongue drum is a tuned drum that procudes a [bell-like sound♫] when
        played with mallets or fingers. It is also called tank drum, hank drum or
        even UFO drum (because of the shape).
        Tongue drums are often tuned to a pentatonic scale. The advantage of a
        pentatonic scale is that no matter what you play, it mostly will sound
        good. The disadvantage is that for a lot of songs you need more notes,
        so if you want to play songs, it is better to have a tongue drum that is
        tuned to a diatonic scale or a chromatic scale.
        The tongues of a tongue drum are often numbered and there exist tabs with
        nummers which makes it easy to play music for people who can not read
        sheet music.
        There are tongue drums that are tuneable by placing special tuning magnets.`;
        this.info = {
            name: 'Tongue drum',
            category: 'Percussion',
            generalInfo: this.gi,
            links: {
                general: [
                    'https://en.wikipedia.org/wiki/Steel_tongue_drum, Steel tongue drum - Wikipedia',
                ],
                beginners_lessons: [
                    'https://www.youtube.com/watch?v=VT6l8pl7xdQ',
                    'https://www.youtube.com/playlist?list=PLafvar4aRJ3OEdSUwFQp0WVbGcqZy2Lv5',
                ],
                songs: [
                    'https://www.youtube.com/playlist?list=PLfL-t2IoaOKjBI8e1Kx7tg9Vx60KvtsWu',
                ],
                articles: [],
                virtual: ['https://www.oriondrum.com/virtual-player'],
                youtube: ['https://www.youtube.com/@SimpleTankDrum'],
                books: [
                    'https://www.dansblad.nl/rtdrum/, Relaxing Music for Tongue Drum',
                    'https://www.dansblad.nl/rtdrum2/, Relaxing Music 2 for Tongue Drum',
                    'https://www.dansblad.nl/wtdrum/, Waltzes for Tongue Drum',
                ],
            },
        };
    }
}

export { Tongue_drum };

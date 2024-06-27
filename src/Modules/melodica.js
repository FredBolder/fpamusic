import { Instrument } from './instrument.js';

class Melodica extends Instrument {
    constructor() {
        super();
        this.a1 = `It is important to dry a melodica after playing. You can remove the moisture
        by pressing the button on the back of the instrument and blowing through the mouthpiece 
        without pressing any keys. Protect a melodica from dust and dirt.`;

        this.gi = `A melodica is a wind instrument that features a keyboard.
        It is polyphonic which means that you can play more tones at the same time.
        Often an extension hose with a mouthpiece is included, making it
        possible to play with two hands.
        The keyboard looks like a piano keyboard, but no matter how hard you strike
        a key, the volume will not be louder. For a louder volume, you need to
        blow harder.`;
        this.info = {
            name: 'Melodica',
            category: 'Wind',
            generalInfo: this.gi,
            articles: {
                maintenance_of_a_melodica: this.a1,
            },
            links: {
                general: [
                    'https://en.wikipedia.org/wiki/Melodica, Melodica - Wikipedia',
                    'https://melodicaworld.com/, MelodicaWorld',
                ],
                beginners_lessons: [
                    'https://www.youtube.com/playlist?list=PLn8WhAo_Dm4GwH2YXcziShKeAjCifmi6p',
                ],
                youtube: [
                    'https://www.youtube.com/@MelodicaAcademy, Melodica Academy',
                    'https://www.youtube.com/@MelodicaMen, Melodica Men',
                    'https://www.youtube.com/@dr.melodicadavidbrancazio8860, Dr. Melodica (David Brancazio)',
                ],
                funny: [
                    'https://www.youtube.com/watch?v=8_9C3Q9AAEc',
                ],
            },
        };
    }
}

export { Melodica };

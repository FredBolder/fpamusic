import { Instrument } from "./instrument.js";

class Voice extends Instrument {
    constructor() {
        super();
        this.gi = `Perhaps you would not expect the human voice to be on a musical instruments
        website, but you can consider it as an amazing universal instrument. Singing,
        whistling and humming are the best known ways to make music with the human
        voice, but you can also imitate existing musical instruments like drums
        (beatboxing), trumpet etc.`;
        this.info = {
            name: "Voice",
            category: "Vocal",
            generalInfo: this.gi,
            links: {
                general: [
                    "https://en.wikipedia.org/wiki/Singing, Singing - Wikipedia",
                    "https://www.wikihow.com/Sing"
                ],
                beginners_lessons: [
                    "https://www.youtube.com/watch?v=jog-nfLldRI, First lesson",
                    "https://www.youtube.com/watch?v=0soSD_52nwM&list=PLPUqmSciJjKrH579Hl9iAKoT2fbm5wdHo"
                ],
                youtube: [
                    "https://www.youtube.com/@SingeoOfficial, Singeo",
                    "https://www.youtube.com/@ZanglesmetMaggie, Zangles met Maggie",
                    "https://www.youtube.com/shorts/uiX4aQEn5eE, Instruments Sound Imitation"
                ],
            }
        };
    }

}

export { Voice };
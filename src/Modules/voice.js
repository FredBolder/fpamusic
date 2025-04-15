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
                    "https://www.youtube.com/shorts/uiX4aQEn5eE, Instruments Sound Imitation",
                    "https://www.youtube.com/watch?v=LeBiXBic3sE, Best Beatboxer in the World"
                ],
                singers: [
                    "https://www.dansblad.nl/greeksingers/, Greek Singers"
                ],
                english_karaoke: [
                    "https://www.youtube.com/@tomybgvideo6299",
                    "https://www.youtube.com/@AcousticLounge"
                ],
                greek_karaoke: [
                    "https://www.youtube.com/@vasilisgeorgaris.Greek.Karaoke",
                    "https://www.youtube.com/playlist?list=PLJuEia4k65qE1f7BhYfpQjQ-AFH8KaMly",
                    "https://www.youtube.com/playlist?list=PLTmjlwfmMG1KNGHQcfMgkI5J9HFkrFZcT",
                    "https://www.youtube.com/playlist?list=PL6iy_mJPjZD6Y38-bUJIpRxMIKrMJCc_c",
                    "https://www.youtube.com/@PastroPastro1"
                ],
            }
        };
    }

}

export { Voice };
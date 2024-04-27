import { Instrument } from './instrument.js';

class Tin_whistle extends Instrument {
    constructor() {
        super();
        this.a1 = `The notes not shown in bold are not in the key of the tin whistle,
        but you can use them to play in another key. Keep in mind that depending
        on your tin whistle, you might need another fingering than indicated.`;

        this.gi = `A tin whistle, Irish whistle or penny whistle is a six-holed wind instrument
        that is often used in Irish folk music. You can also hear one in
        Paul Simon's song You can call me Al.
        The tin whistle is a diatonic instrument, but it is possible to play a chromatic
        scale by using half-holing or special fingerings.
        The range of a tin whistle is normally two octaves. The notes of the second
        octave are played by blowing harder. Tin whistles are available in all 12 major
        keys. The D key is the most common key. On every tin whistle you can
        play in more keys by using advanced fingering or by partially covering a hole.
        For example, with a D tin whistle, you can also easily play
        in G, B minor and E minor. With a C tin whistle, you can also easily play
        in F, A minor and D minor.
        The correct blowing technique and air speed are crucial for producing
        the desired sound. Low notes need slow (warm) air and high notes need
        fast (cold) air.
        For the seventh note on the flute's scale, there are no covered holes.
        For better support you can keep your bottom hand (mostly right hand) pinky
        on the whistle. If that is uncomfortable you can cover the holes
        with the middle pads of your fingers, like you do when playing a bagpipe.
        Avoid covering a hole with a joint, as this may cause air leakage,
        which mostly results in a squeaking sound.`;
        this.info = {
            name: 'Tin whistle',
            category: 'Wind',
            generalInfo: this.gi,
            articles: {
                tin_whistle_fingering_chart: this.a1,
            },
            links: {
                general: [
                    'https://en.wikipedia.org/wiki/Tin_whistle, Tin whistle - Wikipedia',
                    'https://www.wikihow.com/Play-the-Tin-Whistle, How to Play the Tin Whistle',
                ],
                beginners_lessons: [
                    'https://www.youtube.com/playlist?list=PLfUZy8uhccNge9K9DKDWi7Mzvq45QzMEs',
                    'https://www.youtube.com/playlist?list=PL__nIDQ8JTGUrujMEVdDswOVOTGYnjzxj',
                    'https://www.youtube.com/watch?v=jOOXwl20zlA',
                    'https://www.youtube.com/watch?v=vt7sMm4nn10, How to Play Tin Whistle in 10 Mins',
                    'https://www.youtube.com/watch?v=TvfPY-XXUY4, How to hold a tin whistle',
                ],
                songs: [
                    'https://www.tinwhistle.com/tin-whistle-sheet-music-notes-and-tin-whistle-tabs',
                    'https://www.youtube.com/playlist?list=PLQadz4_Sz9ChOwj-s2LAExtSeSf7ISvwq',
                    'https://www.irish-folk-songs.com/traditional-tunes-for-tin-whistle.html',
                    'https://whistleaway.com/sheet-music-for-you-can-call-me-al-paul-simon/, You can call me Al',
                ],
                articles: [
                    'https://learntinwhistle.com/resources/tin-whistle-fingering-charts/, Fingering',
                ],
                youtube: [
                    'https://www.youtube.com/@CutiepieTinWhistle, CutiePie',
                    'https://www.youtube.com/@TinWhistleTraveler, Tin Whistle Traveler',
                    'https://www.youtube.com/@LearnTinWhistle, Learn Tin Whistle',
                    'https://www.youtube.com/@whistletutor, whistletutor',
                    'https://www.youtube.com/watch?v=3V80-Fm_5Gs, Make a Tin Whistle out of PVC Pipe',
                ],
                books: [
                    'https://www.dansblad.nl/grtinwhistle/, Greek Folk Music for D Tin Whistle',
                ],
            },
        };
    }
}

export { Tin_whistle };

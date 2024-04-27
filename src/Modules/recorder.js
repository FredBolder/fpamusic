import { Instrument } from "./instrument.js";

class Recorder extends Instrument {
    constructor() {
        super();
        this.a1 = `It is important to take good care of your recorder. It starts with
        keeping it clean. Make sure that you have brushed your teeth and
        washed your hands before playing. Warm the head under your arm to
        prevent condensation.
        After playing you should dry your recorder. First disconnect the
        head and clean both parts with a cleaning rod with cloth or a
        cleaning brush.
        You can remove moisture in the mouthpiece by closing with your hand
        the end and blow into the window. The moisture will emerge from
        the mouthpiece.
        New wooden recorders must be played in. Play the recorder daily in
        the first six weeks, but not too long. You can play 5 minutes
        a day in the first week, 10 minutes a day in the second week, 15
        minutes a day in the third week etc, but it is better to stop when
        the sound is starting to become bad. Do not use anti-condens in the
        playing-in period and avoid high notes in the beginning.`;

        this.gi = `A recorder is a wind instrument.
        The available sizes are from very small to huge: Garklein, Sopranino,
        Soprano (Descant), Alto (Treble), Tenor, Basset, Great bass and Contra
        bass. The smaller the size, the higher the pitch.
        The Soprano recorder is the most suitable for children and beginners.
        It has a range of almost 3 octaves, but the notes of the third octave
        are very difficult to play and for some of them you need your knee.
        There are cheap, but also very expensive recorders.
        Recorders can be made of wood or plastic. Plastic recorders are cheaper
        and easy to clean. Wooden recorders sound a little better, but they
        are affected by humidity.
        There are two main fingering systems: Baroque (English) and German.
        The German system was later created to make it easier for beginners
        to learn. You can recognize a German recorder by the small fifth
        hole that is smaller than the fourth hole.
        The scale of C is very easy to play on a Soprano German recorder,
        but the fingering for sharps and flats is often more difficult.
        You might think that you can not tune a recorder, but if you
        blow harder the pitch will be higher and if you blow softer the
        pitch will be lower. You can also lower the pitch by pulling the
        mouthpiece a little out.
        If you close with your fingers all holes of a Soprano recorder,
        you will get the low C, but if you half close the bell hole with
        your knee, you will get the B before that C!
        There are also pentatonic recorders that are very easy to play,
        but of course with (mostly) only 7 notes they are very limited.
        Many people think a recorder sounds terrible, but that is probably
        because the recorder is often used by children to start learning
        music and they mostly use the wrong technique. Some causes for a
        bad sound are leaking holes, blowing too hard and condensation in
        the wind way.
        It is important to know that low notes need slow (warm) air and
        high notes need fast (cold) air.
        For an E (second octave) and higher on a Soprano or Tenor recorder,
        the thumb hole must be partially open. The higher the note, the
        more closed the thumb hole must be, but not totally closed.
        This takes practice.`;

        this.info = {
            name: "Recorder",
            category: "Wind",
            generalInfo: this.gi,
            articles: {
                maintenance_of_a_recorder: this.a1,
            },
            links: {
                general: [
                    "https://en.wikipedia.org/wiki/Recorder_(musical_instrument), Recorder - Wikipedia",
                    "https://en.wikipedia.org/wiki/Soprano_recorder,  Soprano recorder - Wikipedia",
                    "https://learnrecorder.com/"
                ],
                beginners_lessons: [
                    "https://www.youtube.com/watch?v=-d6uVjIEkMY, First lesson",
                    "https://www.youtube.com/playlist?list=PLYVfQ47cCHaCRrSS8jeNptYyXGx3DqPtH",
                    "https://www.youtube.com/watch?v=z4tLQ09_YZE, All notes",
                    "https://www.youtube.com/watch?v=PCGjTz2LOPA, Top 10 Recorder Mistakes"
                ],
                songs:
                    [
                        "https://www.youcanplayit.com/",
                        "https://www.capotastomusic.com/soprano-recorder-sheet-music/easy.htm"
                    ],
                articles: [
                    "https://professionalcomposers.com/flute-vs-recorder/, Flute vs Recorder",
                    "https://hub.yamaha.com/winds/wood/recorders-baroque-vs-german/, Baroque vs German",
                    "https://aswltd.com/finger.htm, Recorder Fingering Systems",
                    "http://www.saundersrecorders.com/topnotes.htm, High notes"
                ],
                fingering: [
                    "https://americanrecorder.org/recorder_fingering_charts.php"
                ],
                virtual: [
                    "https://www.doctormusik.com/apps-and-games/virtual-recorder/"
                ],
                youtube: [
                    "https://www.youtube.com/@Team_Recorder, Sarah Jeffery",
                    "https://www.youtube.com/@luciehorsch4454, Lucie Horsch",
                    "https://www.youtube.com/shorts/mbX59xpidW4",
                    "https://www.youtube.com/watch?v=hFnKmqAOmBs, Introducing the Baroque Recorder",
                    "https://www.youtube.com/watch?v=iw0E2xP57UA, Plastic vs Wood",
                    "https://www.youtube.com/watch?v=2LIyUmfgyFw, How to Write for Recorder in 5 Minutes"
                ],
                books: [
                    "https://www.dansblad.nl/brrecorder/, Ballroom & Latin Dances for Soprano Recorder",
                    "https://www.dansblad.nl/grrecorder/, Greek Dances for Soprano Recorder"
                ],
                funny: [
                    "https://www.youtube.com/@Rec0rderMast3r",
                    "https://www.youtube.com/watch?v=2pc67IJZr9o"
                ]
            }
        };
    }

}

export { Recorder };
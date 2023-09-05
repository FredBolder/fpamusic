import { Instrument } from "./instrument.js";

class Recorder extends Instrument {
    constructor() {
        super();
        this.a1 = "It is important to take good care of your recorder. It starts with ";
        this.a1 += "keeping it clean. Make sure that you have brushed your teeth and ";
        this.a1 += "washed your hands before playing. Warm the head under your arm to ";
        this.a1 += "prevent condensation. ";
        this.a1 += "After playing you should dry your recorder. First disconnect the ";
        this.a1 += "head and clean both parts with a cleaning rod with cloth or a ";
        this.a1 += "cleaning brush. ";
        this.a1 += "You can remove moisture in the mouthpiece by closing with your hand ";
        this.a1 += "the end and blow hard into the window. The moisture will emerge from ";
        this.a1 += "the mouthpiece. ";
        this.a1 += "";

        this.gi = "A recorder is a wind instrument. ";
        this.gi += "The available sizes are from very small to huge: Garklein, Sopranino, ";
        this.gi += "Soprano (Descant), Alto (Treble), Tenor, Basset, Great bass and Contra ";
        this.gi += "bass. The smaller the size, the higher the pitch. ";
        this.gi += "The Soprano recorder is the most suitable for children and beginners. ";
        this.gi += "It has a range of almost 3 octaves, but the notes of the third octave ";
        this.gi += "are very difficult to play and for some of them you need your knee. ";
        this.gi += "There are cheap, but also very expensive recorders. ";
        this.gi += "Recorders can be made of wood or plastic. Plastic recorders are cheaper ";
        this.gi += "and easy to clean. Wooden recorders sound a little better, but they ";
        this.gi += "are affected by humidity. ";
        this.gi += "There are two main fingering systems: Baroque (English) and German. ";
        this.gi += "The German system was later created to make it easier for beginners ";
        this.gi += "to learn. You can recognize a German recorder by the small fifth ";
        this.gi += "hole that is smaller than the fourth hole. ";
        this.gi += "The scale of C is very easy to play on a Soprano German recorder, ";
        this.gi += "but the fingering for sharps and flats is often more difficult. ";
        this.gi += "You might think that you can not tune a recorder, but if you ";
        this.gi += "blow harder the pitch will be higher and if you blow softer the ";
        this.gi += "pitch will be lower. You can also lower the pitch by pulling the ";
        this.gi += "mouthpiece a little out. ";
        this.gi += "If you close with your fingers all holes of a Soprano recorder, ";
        this.gi += "you will get the low C, but if you half close the bell hole with ";
        this.gi += "your knee, you will get the B before that C! ";
        this.gi += "There are also pentatonic recorders that are very easy to play, ";
        this.gi += "but of course with (mostly) only 7 notes they are very limited. ";
        this.gi += "Many people think a recorder sounds terrible, but that is probably ";
        this.gi += "because the recorder is often used by children to start learning ";
        this.gi += "music and they mostly use the wrong technique. Some causes for a ";
        this.gi += "bad sound are leaking holes, blowing too hard and condensation in ";
        this.gi += "the wind way. ";
        this.gi += "It is important to know that low notes need slow (warm) air and ";
        this.gi += "high notes need fast (cold) air. ";
        this.gi += "For an E (second octave) and higher on a Soprano or Tenor recorder, ";
        this.gi += "the thumb hole must be partially open. The higher the note, the ";
        this.gi += "more closed the thumb hole must be, but not totally closed. ";
        this.gi += "This takes practice. ";
        this.gi += "";

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
                    "https://www.youtube.com/@Team_Recorder",
                    "https://www.youtube.com/shorts/mbX59xpidW4",
                    "https://www.youtube.com/watch?v=hFnKmqAOmBs, Introducing the Baroque Recorder",
                    "https://www.youtube.com/watch?v=iw0E2xP57UA, Plastic vs Wood"
                ],
                books: [
                    "http://www.dansblad.nl/brrecorder/, Ballroom & Latin Dances for Soprano Recorder",
                    "http://www.dansblad.nl/grrecorder/, Greek Dances for Soprano Recorder"
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
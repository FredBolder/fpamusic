import { Instrument } from "./instrument.js";

class Drums extends Instrument {
  constructor() {
    super();
    this.gi = "A drum set is a collection of drums and cymbals. ";
    this.gi += "A standard drum set normally consists of a [bass drum♫], a [snare drum♫], ";
    this.gi += "one or more [toms♫], a [hi-hat♫], a [crash cymbal♫] and a [ride cymbal♫]. ";
    this.gi += "Before the existence of a drum set, different percussionists were ";
    this.gi += "playing the separate drums. ";
    this.gi += "In addition to acoustic drums, there are also electronic drums and ";
    this.gi += "they are getting better and better.";

    this.a1 = "Often when people are comparing acoustic drums with electronic drums (e-drums), ";
    this.a1 += "they call acoustic drums real drums, but e-drums are as real as acoustic ";
    this.a1 += "drums. They both have their advantages and disadvantages. E-drums can be very ";
    this.a1 += "compact, because the sound is generated electronically. ";
    this.a1 += "You don't need much space for them and they can be transported easily. On the ";
    this.a1 += "other hand, there are also e-drum sets that look the same as an acoustic drum ";
    this.a1 += "set and they have the same size. With acoustic drums, the sound depends a lot ";
    this.a1 += "on where and how hard you hit, so you can make many different sounds. ";
    this.a1 += "Expensive e-drums have also these possibilities, but not as much as acoustic ";
    this.a1 += "drums. The cymbals of a cheap e-drum set mostly have two zones, so a ride ";
    this.a1 += "cymbal can have the normal ride cymbal sound and the bell sound, but on an ";
    this.a1 += "acoustic ride cymbal, you can make much more different sounds. ";
    this.a1 += "Expensive e-drums can have advanced positional sensing, but you can imagine ";
    this.a1 += "how many samples are needed for all these different positions and velocities ";
    this.a1 += "(how hard you hit). Of course there are ways to go smoothly from one sample ";
    this.a1 += "to the other. Not having so many different sounds can also be an advantage, ";
    this.a1 += "because it always sounds good. Of course this makes it more difficult to ";
    this.a1 += "switch from an electronic set to an acoustic set. ";
    this.a1 += "E-drums can be much quieter than acoustic drums, because you can adjust the ";
    this.a1 += "volume, but even when using headphones, there is sound because of hitting ";
    this.a1 += "the drums and cymbals. You can use noise eaters for the pedals, but they are ";
    this.a1 += "expensive. Mesh drum heads are much quieter than rubber pads and they feel ";
    this.a1 += "more like acoustic drum skins. ";
    this.a1 += "With e-drums you can switch very fast between totally different sounding ";
    this.a1 += "drum kits. Most e-drums are designed as an alternative to an acoustic ";
    this.a1 += "drum set, but you can see an e-drum set as a different instrument. With MIDI ";
    this.a1 += "and a drum synthesizer the possibilities are endless. E-drums don't have to ";
    this.a1 += "sound like acoustic drums, but they can. ";
    this.a1 += "A disadvantage of e-drums is that you need electricity. Of course in ";
    this.a1 += "bigger areas, you need microphones for acoustic drums. ";
    this.a1 += "An e-drum set mostly doesn't look as impressive as an acoustic drum set, ";
    this.a1 += "which can be important for a public performance. ";
    this.a1 += "";

    this.a2 = "There are many different drum sticks. This article will help you to find the ";
    this.a2 += "drum sticks that are the best for you. ";
    this.a2 += "On most drum sticks there is a code. The number indicates the diameter. ";
    this.a2 += "The higher the number, the thinner the stick. The most common numbers are 7, ";
    this.a2 += "5 and 2. ";
    this.a2 += "The letter indicates the application (A = orchestra, B = band, ";
    this.a2 += "D = dance band and S = street). The most common letters are A and B. ";
    this.a2 += "5A is universal and a good choice for beginners. 7A is light and very suitable ";
    this.a2 += "for jazz. 5B is slightly heavier than 5A and therefore good for rock. ";
    this.a2 += "2B is heavy and good for hard rock and metal. ";
    this.a2 += "";

    this.info = {
      name: "Drums",
      category: "Percussion",
      generalInfo: this.gi,
      articles: {
        acoustic_vs_electronic_drums: this.a1,
        drum_sticks: this.a2,
      },
      links: {
        general: [
          "https://en.wikipedia.org/wiki/Drum_kit, Drum kit - Wikipedia",
          "https://zinginstruments.com/parts-of-a-drum-set/, Parts of a Drum Set Explained"
        ],
        beginners_lessons: [
          "https://www.youtube.com/watch?v=et9hU7QMDYU, first lesson",
          "https://www.youtube.com/watch?v=XeVLe4dX9V8&list=PL45A6530592779AD4"
        ],
        patterns: [
          "https://drumbeatsonline.com/notation-20-must-know-drum-beats"
        ],
        virtual: [
          "https://www.virtualdrumming.com/",
          "https://www.musicca.com/drums",
        ],
        youtube: [
          "https://www.youtube.com/@65Drums"
        ],
        books: [
          "https://www.dansblad.nl/odd/, Odd Time Drum Grooves",
          "http://www.dansblad.nl/brdrums/, Ballroom and Latin Dance Rhythms for Drums",
          "http://www.dansblad.nl/grdrums/, Greek Dance Rhythms for Drums"
        ],
        software: [
          "https://fredbolder.github.io/fredrums/, frEDrums - Stand alone MIDI drum sound module and synthesizer for electronic drums",
          "https://www.dansblad.nl/dr/, DR - Free drum machine for Windows"
        ],
      },
    };
  }

}

export { Drums };

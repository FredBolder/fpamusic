import { Instrument } from "./instrument.js";

class Drums extends Instrument {
  constructor() {
    super();
    this.gi = "A drum set is a collection of drums and cymbals. ";
    this.gi += "A standard drum set normally consists of a bass drum, a snare drum, ";
    this.gi += "one or more toms, a hi-hat, a crash cymbal and a ride cymbal. ";
    this.gi += "Before the existence of a drum set, different percussionists were ";
    this.gi += "playing the separate drums. ";
    this.gi += "In addition to acoustic drums, there are also electronic drums and ";
    this.gi += "they are getting better and better.";
    this.info = {
      name: "Drums",
      category: "Percussion",
      generalInfo: this.gi,
      links: {
        general: [
          "https://en.wikipedia.org/wiki/Drum_kit, Drum kit - Wikipedia",
        ],
        beginners_lessons: [
          "https://www.youtube.com/watch?v=et9hU7QMDYU, first lesson",
          "https://www.youtube.com/watch?v=XeVLe4dX9V8&list=PL45A6530592779AD4"
        ],
        virtual: [
          "https://www.virtualdrumming.com/",
          "https://www.musicca.com/drums",
        ],
        books: [
          "https://www.dansblad.nl/odd/, Odd Time Drum Grooves",
          "http://www.dansblad.nl/brdrums/, Ballroom and Latin Dance Rhythms for Drums",
          "http://www.dansblad.nl/grdrums/, Greek Dance Rhythms for Drums"
        ],
      },
    };
  }

}

export { Drums };

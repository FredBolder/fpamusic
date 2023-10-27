import { Instrument } from "./instrument.js";

class Tin_whistle extends Instrument {
  constructor() {
    super();
    this.a1 =
      "The notes not shown in bold are not in the key of the tin whistle, ";
    this.a1 += "but you can use them to play in another key. ";
    this.a1 += "";

    this.gi =
      "A tin whistle, Irish whistle or penny whistle is a six-holed wind instrument. ";
    this.gi +=
      "It is a diatonic instrument, but it is possible to play a chromatic scale by ";
    this.gi += "using half-holing or special fingerings. ";
    this.gi +=
      "The range of a tin whistle is normally two octaves. The notes of the second ";
    this.gi +=
      "octave are played by overblowing. Tin whistles are available in all 12 major ";
    this.gi +=
      "keys. The D key is the most common key. On every thin whistle you can ";
    this.gi +=
      "play in more keys. For example, with a D tin whistle, you can also easily play ";
    this.gi += "in G, B minor and E minor. ";
    this.gi += "";
    this.info = {
      name: "Tin whistle",
      category: "Wind",
      generalInfo: this.gi,
      articles: {
        tin_whistle_fingering_chart: this.a1,
      },
      links: {
        general: [
          "https://en.wikipedia.org/wiki/Tin_whistle, Tin whistle - Wikipedia",
        ],
        beginners_lessons: [
          "https://www.youtube.com/playlist?list=PLfUZy8uhccNge9K9DKDWi7Mzvq45QzMEs",
          "https://www.youtube.com/playlist?list=PL__nIDQ8JTGUrujMEVdDswOVOTGYnjzxj",
          "https://www.youtube.com/watch?v=jOOXwl20zlA",
        ],
        songs: [
          "https://www.tinwhistle.com/tin-whistle-sheet-music-notes-and-tin-whistle-tabs",
          "https://www.youtube.com/playlist?list=PLQadz4_Sz9ChOwj-s2LAExtSeSf7ISvwq",
        ],
        articles: [
          "https://learntinwhistle.com/resources/tin-whistle-fingering-charts/, Fingering",
        ],
        youtube: [
          "https://www.youtube.com/@CutiepieTinWhistle, CutiePie",
          "https://www.youtube.com/@TinWhistleTraveler, Tin Whistle Traveler",
          "https://www.youtube.com/@LearnTinWhistle, Learn Tin Whistle",
        ],
      },
    };
  }
}

export { Tin_whistle };

import { Instrument } from "./instrument.js";

class Drums extends Instrument {
  constructor() {
    super();
    this.gi = `A drum set is a collection of drums and cymbals.
    A standard drum set normally consists of a [bass drum♫], a [snare drum♫],
    one or more [toms♫], a [hi-hat♫], a [crash cymbal♫] and a [ride cymbal♫].
    Before the existence of a drum set, different percussionists were
    playing the separate drums.
    In addition to acoustic drums, there are also electronic drums and
    they are getting better and better.`;

    this.a1 = `Often when people are comparing acoustic drums with electronic drums (e-drums),
    they call acoustic drums real drums, but e-drums are as real as acoustic
    drums. They both have their advantages and disadvantages. E-drums can be very
    compact, because the sound is generated electronically.
    You don't need much space for them and they can be transported easily. On the
    other hand, there are also e-drum sets that look the same as an acoustic drum
    set and they have the same size. With acoustic drums, the sound depends a lot
    on where and how hard you hit, so you can make many different sounds.
    Expensive e-drums have also these possibilities, but not as much as acoustic
    drums. The cymbals of a cheap e-drum set mostly have two zones, so a ride
    cymbal can have the normal ride cymbal sound and the bell sound, but on an
    acoustic ride cymbal, you can make much more different sounds.
    Expensive e-drums can have advanced positional sensing, but you can imagine
    how many samples are needed for all these different positions and velocities
    (how hard you hit). Of course there are ways to go smoothly from one sample
    to the other. Not having so many different sounds can also be an advantage,
    because it always sounds good. Of course this makes it more difficult to
    switch from an electronic set to an acoustic set.
    E-drums can be much quieter than acoustic drums, because you can adjust the
    volume, but even when using headphones, there is sound because of hitting
    the drums and cymbals. You can use noise eaters for the pedals, but they are
    expensive. Mesh drum heads are much quieter than rubber pads and they feel
    more like acoustic drum skins.
    With e-drums you can switch very fast between totally different sounding
    drum kits. Most e-drums are designed as an alternative to an acoustic
    drum set, but you can see an e-drum set as a different instrument. With MIDI
    and a drum synthesizer the possibilities are endless. E-drums don't have to
    sound like acoustic drums, but they can.
    A disadvantage of e-drums is that you need electricity. Of course in
    bigger areas, you need microphones for acoustic drums.
    An e-drum set mostly doesn't look as impressive as an acoustic drum set,
    which can be important for a public performance.`;

    this.a2 = `There are many different drum sticks. This article will help you to find the
    drum sticks that are the best for you.
    Drum sticks are mostly made of wood (hickory, maple or oak).
    On most drum sticks there is a code. The number indicates the diameter.
    The higher the number, the thinner and lighter the stick. The most common
    numbers are 7, 5 and 2.
    The letter indicates the application (A = orchestra, B = band,
    D = dance band and S = street). The most common letters are A and B.
    5A is universal and a good choice for beginners. 7A is light and very suitable
    for jazz. 5B is slightly heavier than 5A and therefore good for rock.
    2B is heavy and good for hard rock and metal.
    Please note that, for example, 5B drum sticks from one brand may differ from
    5B drum sticks from another brand.
    The sound of acoustic cymbals depends on the tip of the drum stick.
    As you can see in the picture, there are many different tip shapes.
    The smaller the surface area that the cymbal touches, the brighter
    the sound. A large surface area results in a full and warm sound.
    The ball shape is very useful when you want a consistent and bright sound.
    You can use drum sticks with a tear drop tip for a full and warm sound. 
    Drum sticks with an oval tip are great when you want to make different
    sounds depending on the angle. A barrel shaped tip results in a punchy
    sound.
    There are also nylon tips. They produce a consistent and bright sound.
    With electronic drums, the shape of the tip makes no difference in the sound.
    If you play both acoustic drums and electronic drums, it is important not to
    play electronic drums with the same sticks you used to play acoustic drums.
    Drum sticks can easily be damaged by playing acoustic cymbals, and damaged
    drum sticks can damage electronic drums.
    When you want to buy a drum stick, you can check whether it is straight by
    rolling it on a flat surface. Some good drum stick brands are Vic Firth
    and Promark.`;

    this.a3 = `BD = bass drum, SD = snare drum, HT = high tom, MT = mid tom,
    FT = floor tom, HH = hi-hat`;

    this.info = {
      name: "Drums",
      category: "Percussion",
      generalInfo: this.gi,
      articles: {
        acoustic_vs_electronic_drums: this.a1,
        drum_sticks: this.a2,
        rock_fills: this.a3,
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
          "https://drumbeatsonline.com/notation-20-must-know-drum-beats",
          "https://www.youtube.com/watch?v=Gc2K9JQAyRE",
          "https://thedrumninja.com/odd-time-drumming-5-8/, 5/8",
          "https://thedrumninja.com/odd-time-drumming-7-8/, 7/8"
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

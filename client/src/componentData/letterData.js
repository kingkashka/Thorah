const letterData = [
  {
    label: "Aleph",
    title: "א",
    number: "1",
    original: "Oath - אות",
    picture: "/images/letterImages/aleph.jpg",
    description:
      "Being the first letter / sign it initially represented a sign post",
  },
  {
    label: "Beith",
    title: "ב",
    number: "2",
    original: "Beith - בית",
    picture: "/images/letterImages/beith.jpg",
    description:
      "בית (Beith) means house in the sense of a building, but also household; wife and children.",
  },
  {
    label: "Gimel",
    title: "ג",
    number: "3",
    original: "Gamal - גמל",
    picture: "/images/letterImages/gamal.jpg",
    // description:
    //   "The verb גמל (gamal) means to deal, or recompense in the sense of benefitting from. Derivation גמל (gamal) means camel. It is said that the letter reminds of a camel's neck.",
  },
  {
    label: "Daleth",
    title: "ד",
    number: "4",
    original: "Dag - דג",
    picture: "/images/letterImages/dag.jpg",
    description:
      "	",
  },
  {
    label: "Heh",
    title: "ה",
    number: "5",
    original: "Halal - הלל",
    picture: "",
    description:
      "The spelling and thus the meaning of this word is uncertain. Klein spells הא (he), meaning lo! behold! Fuerst holds to הי, and thinks it's a part of the name for heth; letter 8.",
  },
  {
    label: "Waw",
    title: "ו",
    number: "6",
    original: "Waw - וו",
    picture: "/images/letterImages/waw.webp",
    description:
      "The word וו (waw) means hook or peg, and is strictly reserved for the hooks/ pegs that kept the curtains of the tabernacle in place.",
  },
  {
    label: "Zaiyen",
    title: "ז",
    number: "7",
    original: "Zara - זרע",
    picture: "",
    description:
      "he word זין does not occur in Scriptures. Klein suggests that the form of the zayin represents a hand weapon, and explains that zyn means arm, ornament, to arm, to adorn (no references to Scriptures).",
  },
  {
    label: "Chet",
    title: "ח",
    number: "8",
    original: "Kargal - חרדל",
    picture: "/images/letterImages/chet.jpg",
    description: "chet represents a beetle",
  },
  {
    label: "Tet",
    title: "ט",
    number: "9",
    original: "Tor - טור",
    picture: "",
    description:
      "The origin of the teth is a bit of a mystery. Klein derives from טות (twh), spin, and renders teth to knot, knot together, to twist into each other, to interweave. The letter teth indeed looks like a little vortex or spiral.",
  },
  {
    label: "Yod",
    title: "י",
    number: "10",
    original: "Yad - יד",
    picture: "/images/letterImages/yad.jpg",
    description:
      "The word is synonymous with power or might; to fall in one's hands. It's typical that the alphabet's smallest letter came to mean power, but perhaps its shape reminded of a little fist. As postfix, this letter י (yod) forms a possessive, and as prefix it creates a third person singular imperfect.",
  },
  {
    label: "Kaf",
    title: "כ",
    number: "20",
    original: "kanaf - כנף",
    picture: "",
    description:
      "	One of two regular words for hand (the other being the 10th letter). The noun כף (kap) denotes the hand as outstretched, asking and weak. The word basically encompasses anything that is hollow or outstretched in order to receive something: dish, plate, etc. The letter kap is written ך when it occurs at the end of a word, and כ when it occurs at the beginning or half-way a word.",
  },
  {
    label: "",
    title: "ל",
    number: "30",
    original: "Lamed",
    picture: "",
    description: `The verb למד (lamad) means learn or teach. Derivative תלמיד (talmid) means scholar (hence Talmud), and derivative מלמד means ox goad. The letter lamed is said to look like such a device, and when Jesus says to Saul, "it is hard for you to kick against the goads" (Acts 26:14) He may hint at Saul's learning rather than coercion.`,
  },
  {
    label: "Mem",
    title: "מ",
    number: "40",
    original: "Mayim - מים",
    picture: "/images/letterImages/mem.jpg",
    description:
      " means waters in the sense of a larger body (sea, ocean). It is suggested that the letter mem looks like a wave.",
  },
  {
    label: "Nun",
    title: "נ",
    number: "50",
    original: "Nachash - נחש",
    picture: "/images/letterImages/nun.jpg",
    description:
      "The verb נון (nun) means propagate, increase. Derivative נין means offspring, posterity.",
  },
  {
    label: "Samech",
    title: "ס",
    number: "60",
    original: "Sabav - סבב",
    picture: "",
    description: `The verb סמך (samak) means lean upon, support, uphold. It is the verb that is used in the phrase "laying on of hands."`,
  },
  {
    label: "Ayin",
    title: "ע",
    number: "70",
    original: "Ayin - עין",
    picture: "",
    description:
      "The word עין (ayin) means eye in all regular senses, but also as means of expression (knowledge, character, etc.). The word עין (ayin) means spring or fountain. ",
  },
  {
    label: "Peh",
    title: "פ",
    number: "80",
    original: "Panim - פנים",
    picture: "",
    description:
      "The word פה (peh) means mouth, but is often synonymous with speech. With a little good will one may recognize a face with a mouth in the shape of this letter.",
  },
  {
    label: "Tsade",
    title: "צ",
    number: "90",
    original: "tzamach - צמח",
    picture: "",
    description:
      "Klein derives from the verb צוד (sud), to hunt, and states that צדי means fish hook (no Biblical occurrence). Another name for this letter is צדיק (saddiq), just, righteous, from the verb צדק (sadeq), to be just or righteous.",
  },
  {
    label: "Qoph",
    title: "ק",
    number: "100",
    original: "",
    picture: "",
    description: "picture of an axe or mace head",
  },
  {
    label: "Resh",
    title: "ר",
    number: "200",
    original: "R'ash - ראש",
    picture: "",
    description: "picture of a head",
  },
  {
    label: "Shen",
    title: "ש",
    number: "300",
    original: "Shen - שן",
    picture: "https://images.pexels.com/photos/55814/leo-animal-savannah-lioness-55814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "As derivation from the verb שׁנן (shanan), sharpen, the word שׁן (shen) means tooth or ivory. Both the verb and the noun are used primarily in a literal sense: sharpening of swords and arrows, but sometimes figuratively: the sharpening of one's tongue (saying sharp, mean words) or the sharpening of one's mind (Deuteronomy 6:7). ",
  },
  {
    label: "Taw",
    title: "ת",
    number: "400",
    original: "Thaw - תו",
    picture: "",
    description:
      "תו (taw) means mark, and its verb תוה (tawa), scribble, limit, is probably derived from the noun. ",
  },
];
export default letterData;

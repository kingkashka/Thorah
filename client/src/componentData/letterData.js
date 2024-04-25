const letterData = [
    {
        label: "Aleph",
        image: "",
        title: "א",
        sound: "/src/soudFiles/damndaniel.mp3",
        number:"1",
        description:"The root אלף ('aleph) is rare and means to learn (Proverbs 22:25, Job 15:5, 33:33, 35:11). The identical word אלף ('alep) means to produce thousands (Psalm 144:13 only). Derivation אלף means oxen (the connection lies perhaps in guidance or to team up). Many suggest that the letter reminds of the head of an ox."
    },
    {
        label: "Bayit",
        image: "",
        title: "ב",
        sound: "https://www.myinstants.com/en/instant/woah-crash-bandicoot-53169/?utm_source=copy&utm_medium=share",
        number:"2",
        description:"The word בית (bayit) means house in the sense of a building, but also household; wife and children. This word also serves to mean House Of The Lord, or Temple. As preposition the letter means 'in'. As such it is the first letter of the Bible. The first word of the Bible comes from the name of the 20th letter: rosh."
    },
    {
        label: "Gimel",
        image: "",
        title: "ג",
        sound: "",
        number:"3",
        description:"The verb גמל (gamal) means to deal, or recompense in the sense of benefitting from. Derivation גמל (gamal) means camel. It is said that the letter reminds of a camel's neck."
    },
    {
        label: "Daleth",
        image: "",
        title: "ד",
        sound: "",
        number:"4",
        description:"	From root דלה (dala), draw (water). The word דלת (delet) specifically denotes a swinging door of a building. Since doors most commonly opened inward, this 'thing-you-draw' is named after a going out of a house, or letting someone else in."
    },
    {
        label: "Heh",
        image: "",
        title: "ה",
        sound: "",
        number:"5",
        description:"The spelling and thus the meaning of this word is uncertain. Klein spells הא (he), meaning lo! behold! Fuerst holds to הי, and thinks it's a part of the name for heth; letter 8."
    },
    {
        label: "Waw",
        image: "",
        title: "ו",
        sound: "",
        number:"6",
        description:"The word וו (waw) means hook or peg, and is strictly reserved for the hooks/ pegs that kept the curtains of the tabernacle in place. It is said that the shape of the letter ו (waw) reminds of a hook or peg."
    },
    {
        label: "Zayin",
        image: "",
        title: "ז",
        sound: "",
        number:"7",
        description:"he word זין does not occur in Scriptures. Klein suggests that the form of the zayin represents a hand weapon, and explains that zyn means arm, ornament, to arm, to adorn (no references to Scriptures)."
    },
    {
        label: "Chet",
        image: "",
        title: "ח",
        sound: "",
        number:"8",
        description:""
    },
    {
        label: "Tet",
        image: "",
        title: "ט",
        sound: "",
        number:"9",
        description:"The origin of the teth is a bit of a mystery. Klein derives from טות (twh), spin, and renders teth to knot, knot together, to twist into each other, to interweave. The letter teth indeed looks like a little vortex or spiral."
    },
    {
        label: "Yod",
        image: "",
        title: "י",
        sound: "",
        number:"10",
        description:"The word is synonymous with power or might; to fall in one's hands. It's typical that the alphabet's smallest letter came to mean power, but perhaps its shape reminded of a little fist. As postfix, this letter י (yod) forms a possessive, and as prefix it creates a third person singular imperfect."
    },
    {
        label: "Kaph & Sofit",
        image: "",
        title: "ך\כ",
        sound: "",
        number:"20",
        description:"	One of two regular words for hand (the other being the 10th letter). The noun כף (kap) denotes the hand as outstretched, asking and weak. The word basically encompasses anything that is hollow or outstretched in order to receive something: dish, plate, etc. The letter kap is written ך when it occurs at the end of a word, and כ when it occurs at the beginning or half-way a word."
    },
    {
        label: "Kaph Sophit",
        image: "",
        title: "ך",
        sound: "",
        number:"20",
        description:""
    },
    {
        label: "Lamed",
        image: "",
        title: "ל",
        sound: "",
        number:"30",
        description:`The verb למד (lamad) means learn or teach. Derivative תלמיד (talmid) means scholar (hence Talmud), and derivative מלמד means ox goad. The letter lamed is said to look like such a device, and when Jesus says to Saul, "it is hard for you to kick against the goads" (Acts 26:14) He may hint at Saul's learning rather than coercion.`
    },
    {
        label: "Mem",
        image: "",
        title: "מ",
        sound: "",
        number:"40",
        description:" means waters in the sense of a larger body (sea, ocean). It is suggested that the letter mem looks like a wave."
    },
    {
        label: "Nun",
        image: "",
        title: "נ",
        sound: "",
        number:"50",
        description:"The verb נון (nun) means propagate, increase. Derivative נין means offspring, posterity."
    },
    {
        label: "Samech",
        image: "",
        title: "ס",
        sound: "",
        number:"60",
        description:`The verb סמך (samak) means lean upon, support, uphold. It is the verb that is used in the phrase "laying on of hands."`
    },
    {
        label: "Ayin",
        image: "",
        title: "ע",
        sound: "",
        number:"70",
        description:"The word עין (ayin) means eye in all regular senses, but also as means of expression (knowledge, character, etc.). The word עין (ayin) means spring or fountain. "
    },
    {
        label: "Peh",
        image: "",
        title: "פ",
        sound: "",
        number:"80",
        description:"The word פה (peh) means mouth, but is often synonymous with speech. With a little good will one may recognize a face with a mouth in the shape of this letter."
    },
    {
        label: "Feh",
        image: "",
        title: "ף",
        sound: "",
        number:"80",
        description:""
    },
    {
        label: "Tsade",
        image: "",
        title: "צ",
        sound: "",
        number:"90",
        description:"Klein derives from the verb צוד (sud), to hunt, and states that צדי means fish hook (no Biblical occurrence). Another name for this letter is צדיק (saddiq), just, righteous, from the verb צדק (sadeq), to be just or righteous."
    },
    {
        label: "Tsade Sophit",
        image: "",
        title: "ץ",
        sound: "",
        number:"90",
        description:""
    },
    {
        label: "Qoph",
        image: "",
        title: "ק",
        sound: "",
        number:"100",
        description:""
    },
    {
        label: "Resh",
        image: "",
        title: "ר",
        sound: "",
        number:"200",
        description:""
    },
    {
        label: "Shin/Sin",
        image: "",
        title: "ש",
        sound: "",
        number:"300",
        description:"As derivation from the verb שׁנן (shanan), sharpen, the word שׁן (shen) means tooth or ivory. Both the verb and the noun are used primarily in a literal sense: sharpening of swords and arrows, but sometimes figuratively: the sharpening of one's tongue (saying sharp, mean words) or the sharpening of one's mind (Deuteronomy 6:7). "
    },
    {
        label: "Taw",
        image: "",
        title: "ת",
        sound: "",
        number:"400",
        description:"תו (taw) means mark, and its verb תוה (tawa), scribble, limit, is probably derived from the noun. "
    },
]
export default letterData
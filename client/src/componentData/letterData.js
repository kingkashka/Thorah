const letterData = [
  {
    label: "Aleph",
    title: "א",
    number: "1",
    original: "Oath - אות",
    picture: "/images/letterImages/aleph.jpg",
    description: `Being the first sign, "aleph" initially represented a sign post this is more accurately represented in the Hebrew Seals script where the sign clearly does not represent an ox.`,
  },
  {
    label: "Beith",
    title: "ב",
    number: "2",
    original: "Beith - בית",
    picture: "/images/letterImages/beith.jpg",
    description:
      "בית (Beith) means house in the sense of a home, a household; Elohim, father, wife and children.",
  },
  {
    label: "Gimel",
    title: "ג",
    number: "3",
    original: "Gamal - גמל",
    picture: "/images/letterImages/gamal.jpg",
    description:
      `The verb גמל (gamal) in Hebrew signifies "to deal" or "to recompense," often in the context of benefiting from an action. The noun גמל (gamal) is associated with the camel. The letter's shape is sometimes said to resemble the neck of a camel.`,
  },
  {
    label: "Daleth",
    title: "ד",
    number: "4",
    original: "Dag - דג",
    picture: "/images/letterImages/dag.jpg",
    alternate: "",
    description: "initially representing a fish and now to represent the door of a tent.	",
  },
  {
    label: "Heh",
    title: "ה",
    number: "5",
    original: "Halal - הלל",
    picture:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL3Jhd3BpeGVsX29mZmljZV8yNV9waG90b19vZl9zdW5fcmF5X2ZpbG1fYWVzdGhldGljX3JldHJvX21pbmltYV9jZDJhMGJmYy1mZWVjLTQxYTgtOWU2MC1kOTVkNmZmN2EzYTlfMS5qcGc.jpg",
    description:
      `Originally, the Hebrew letter ה (Heh) was thought to symbolize rays of sunshine and is associated with the word הלל (halal), meaning "to shine." Additionally, ה (Heh) can also carry the meaning of "lo!" or "behold!" According to some interpretations.`,
  },
  {
    label: "Waw",
    title: "ו",
    number: "6",
    original: "Waw - וו",
    picture: "/images/letterImages/waw.webp",
    description:
      "The term וו (waw) denotes a hook or peg, specifically designated for the purpose of securing the curtains of the tabernacle. The letter ו (waw) is believed to resemble the shape of a hook or peg, reinforcing its association with this function",
  },
  {
    label: "Zayin",
    title: "ז",
    number: "7",
    original: "Zara - זרע",
    picture:
      "https://media.istockphoto.com/id/971038924/vector/farmers-plows-the-land-with-animals.jpg?s=612x612&w=0&k=20&c=5-YdyDQoA7n4cyeA-0PJs6cD1HkimL_DuKUPX8PEJiA=",
    description:
      `The term זין does not appear in the Scriptures, but it symbolizes the farmer's plow, which is employed to sow the land with seed. This concept is derived from the noun זרע, signifying "seed," and the verb associated with sowing.`,
  },
  {
    label: "Chet",
    title: "ח",
    number: "8",
    original: "Choma - חומה",
    picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpaintingvalley.com%2Fimages%2Fmoses-red-sea-painting-22.jpg&f=1&nofb=1&ipt=2678fa8d11757d9701ae14d7685500d944bea2f5e03458abaf820fa44faf240a&ipo=images",
    description: `Wall of a city or a fortress. A true divider like stated in the parting of the ים סוף (yam suph) Exodus 14:22 "and they went the children of israel into the sea on dry ground and the waters to them "חומה" (a wall) on their right and left"`,
  },
  {
    label: "Tet",
    title: "ט",
    number: "9",
    original: "Tor - טור",
    picture: "",
    description:
      `"to twist into each other," or "to interweave." The appearance of the letter teth does resemble a small vortex or spiral, which aligns with these interpretations.`,
  },
  {
    label: "Yod",
    title: "י",
    number: "10",
    original: "Yad - יד",
    picture: "/images/letterImages/yad.jpg",
    description:
      "The term is synonymous with power or might, signifying the idea of something falling into one's hands. It's intriguing that the smallest letter of the alphabet came to represent power, but perhaps its shape evoked the image of a small fist.",
  },
  {
    label: "Kaf",
    title: "כ",
    number: "20",
    original: "Kaf - כף",
    picture: "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjAyMTAwODk3ODMwOTM3NjY4/phrases-to-ask-for-support-according-to-a-therapist.jpg",
    description:
      "	The noun כף (kap) denotes the hand as outstretched, asking and weak. The word basically encompasses anything that is hollow or outstretched in order to receive something",
  },
  {
    label: "Lamed",
    title: "ל",
    number: "30",
    original: "Lamed",
    picture:
      "https://media.bible.art/661717e0-add4-4b97-9de1-16693fdfdb2c-compressed.jpg",
    description: `The verb למד (lamad) means learn or teach. Derivative תלמיד (talmid) means scholar (hence Talmud), and derivative מלמד means ox goad.`,
  },
  {
    label: "Mem",
    title: "מ",
    number: "40",
    original: "Mayim - מים",
    picture: "/images/letterImages/mem.jpg",
    description:
      "Mem represents waters in the context of larger bodies such as seas or oceans. Some suggest that the letter mem resembles a wave, which aligns with its association with bodies of water.",
  },
  {
    label: "Nun",
    title: "נ",
    number: "50",
    original: "Nachash - נחש",
    picture:
      "https://photographylife.com/wp-content/uploads/2021/04/eyelash-viper-is-very-beautiful-snakes-are-misunderstood-.jpg",
    description:
      "Initially, the letter נ (Nun) represented a snake, a connection that is more apparent in Hebrew seals and ancient pictographs.",
  },
  {
    label: "Samech",
    title: "ס",
    number: "60",
    original: "Sabav - סבב",
    picture: "https://images.pexels.com/photos/39279/ship-traffic-jams-rope-dew-cordage-39279.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: `The verb סמך (samak) means lean upon, support, uphold. It is the verb that is used in the phrase "laying on of hands."`,
  },
  {
    label: "Ayin",
    title: "ע",
    number: "70",
    original: "Ayin - עין",
    picture:
      "https://www.shutterstock.com/image-photo/extreme-closeup-photo-african-womans-600nw-792868357.jpg",
    description:
      `The word עין (ayin) indeed signifies "eye" in all regular senses, encompassing physical vision as well as metaphorical expressions like knowledge and character. Additionally, עין (ayin) carries the meaning of "spring" or "fountain.`,
  },
  {
    label: "Peh",
    title: "פ",
    number: "80",
    original: "Peh - פה",
    picture:
      "https://t3.ftcdn.net/jpg/03/33/88/90/360_F_333889026_rP8UIHhS2HxzapSuYUVaW6tFxXwXbtpI.jpg",
    description:
      "The word פה (peh) means mouth, but is often synonymous with speech. With a little good will one may recognize a face with a mouth in the shape of this letter.",
  },
  {
    label: "Tsade",
    title: "צ",
    number: "90",
    original: "tsadhe - צדי",
    picture:
      "https://www.360financialliteracy.org/var/ezflow_site/storage/images/360finlit/homepage-herospace-images/sprouting-plant/3313987-1-eng-US/sprouting-plant.jpg",
    description:
      "Klein derives from the verb צוד (sud), to hunt, and states that צדי means fish hook (no Biblical occurrence).",
  },
  {
    label: "Qoph",
    title: "ק",
    number: "100",
    original: "",
    picture:
      "https://images.pexels.com/photos/544458/pexels-photo-544458.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "The root verb קוף (qwp) indeed encompasses the idea of circular motion. Furthermore, it is used to denote the ear of an axe or needle, or even the back of the head.",
  },
  {
    label: "Resh",
    title: "ר",
    number: "200",
    original: "R'ash - ראש",
    picture:
      "https://images.pexels.com/photos/10786228/pexels-photo-10786228.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "The very common word ראשׁ (rosh) basically means head, but is used to indicate whatever leads or comes first: captain, summit, cap stone.",
  },
  {
    label: "Shen",
    title: "ש",
    number: "300",
    original: "Shen - שן",
    picture:
      "https://t4.ftcdn.net/jpg/06/29/93/19/360_F_629931975_W2Fu23XZpARfEjl4qbUj6OKdEBjEF3rI.jpg",
    description:
      `Derived from the verb שׁנן (shanan), meaning "to sharpen," the word שׁן (shen) signifies "tooth" or "ivory." also they are occasionally employed figuratively, as in the sharpening of one's mind, as in Deuteronomy 6:7.`,
  },
  {
    label: "Taw",
    title: "ת",
    number: "400",
    original: "Thaw - תו",
    picture: "",
    description:
   `תו (taw) does indeed signify "mark," and its verb תוה (tawa), meaning "to scribble" or "to limit," is likely derived from this noun. The more ancient form of this letter resembled an X, a shape that naturally lends itself to being a general mark.`,
  },
];
export default letterData;

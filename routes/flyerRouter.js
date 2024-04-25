const express = require("express");
const flyerRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const flyerCardData = [
  {
    image: "/src/images/small images/eagle.jpg",
    title: "נשר",
    label: "The Eagle",
    transliteration: `Nashar`,
  },
  {
    image: "/src/images/small images/vulture.jpg",
    title: "פרס",
    label: "The Vulture",
    transliteration: "Paras",
  },
  {
    image: "/src/images/small images/buzzard.jpg",
    title: "עזניה",
    label: "The Buzzard",
    transliteration: "Aghznia",
  },
  {
    image: "/src/images/small images/falcon.jpg",
    title: "דאה",
    label: "The Falcon",
    transliteration: `Da'ah`,
  },
  {
    image: "/src/images/small images/kite.jpg",
    title: "איה",
    label: "The Kite",
    transliteration: `Ahyah`,
  },
  {
    image: "/src/images/small images/raven.jpeg",
    title: "עורב ",
    label: "The Raven/Crow",
    transliteration: `Oghrev`,
  },
  {
    image: "/src/images/small images/trueOwl.JPG",
    title: "בת היענה",
    label: "The True Owl",
    transliteration: `Bath Ha-Ya'ahnah`,
  },
  {
    image: "/src/images/small images/hawk.jpg",
    title: "תחמס",
    label: "The Hawk",
    transliteration: `Thakhmas`,
  },
  {
    image: "/src/images/small images/seagull.jpg",
    title: "שחף",
    label: "The Seagull",
    transliteration: `Shakaph`,
  },
  {
    image: "/src/images/small images/osprey.jpg",
    title: "נץ",
    label: "The Osprey",
    transliteration: `Nats`,
  },
  {
    image: "/src/images/small images/littleOwl.jpg",
    title: "כוס",
    label: "The little Owl",
    transliteration: `Chos`,
  },
  {
    image: "/src/images/small images/cormorant.jpg",
    title: "שלך",
    label: "The Cormorant",
    transliteration: `Shalach`,
  },
  {
    image: "/src/images/small images/barnOwl.jpg",
    title: "ינשוף",
    label: "The Barn Owl",
    transliteration: `Yanshoph`,
  },
  {
    image: "/src/images/small images/lemur.jpg",
    title: "תנשמת",
    label: "The flying Lemur/Squirrel",
    transliteration: `Thanashmath`,
  },
  {
    image: "/src/images/small images/pelican.jpg",
    title: `קאת`,
    label: "The Pelican",
    transliteration: `Ka'ath`,
  },
  {
    image: "/src/images/small images/crane.jpg",
    title: "רחם",
    label: "The Crane",
    transliteration: `Rakham`,
  },
  {
    image: "/src/images/small images/stork3.jpg",
    title: `חסידה`,
    label: "The Stork",
    transliteration: `Khasidah`,
  },
  {
    image: "/src/images/small images/heron.jpg",
    title: "אנפה",
    label: "The Heron",
    transliteration: `Anaphah`,
  },
  {
    image: "/src/images/small images/hoopoe.jpg",
    title: " דוכיפת",
    label: "The Hoopoe",
    transliteration: `Doch Yaphath`,
  },

  {
    image: "/src/images/small images/bat.jpg",
    title: "עטלף",
    label: "The Bat",
    transliteration: `Aghtlaph`,
  },
];

flyerRouter.get("/", (req, res) => {
  res.send(flyerCardData);
});

flyerRouter.get("/:flyerId", (req, res, next) => {
  const flyerId = req.params.flyerId;
  const foundFlyer = flyerData.find((flyer) => flyer._id === flyerId);

  if (!foundFlyer) {
    const error = new Error(`The flyer with ID ${flyerId} could not be found.`);
    return next(error);
  }

  res.send(foundFlyer);
});

flyerRouter.post("/", (req, res) => {
  const newCreeper = req.body;
  newCreeper._id = uuidv4();
  flyerData.push(newCreeper);
  res.send(newCreeper);
});

flyerRouter.delete("/:flyerId", (req, res) => {
  const flyerId = req.params.flyerId;
  const flyerIndex = flyerData.findIndex((flyer) => flyer._id === flyerId);
  flyerData.splice(flyerIndex, 1);
  res.send(`successfully deleted flyer with ID: ${flyerId}`);
});

module.exports = flyerRouter;

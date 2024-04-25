const express = require("express");
const onFourRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const onFourData = [
  {
    image: "/src/images/creepersOnFour/weasel.jpg",
    title: "חולד",
    label: "The Weasel",
    transliteration: `Kholad`,
  },
  {
    image: "/src/images/creepersOnFour/mouse.jpg",
    title: "עכבר",
    label: "The Mouse",
    transliteration: `Aghchbar`,
  },
  {
    image: "/src/images/creepersOnFour/Tortoise1.jpg",
    title: "צב",
    label: "The Tortoise/Terrapin",
    transliteration: `Tsav`,
  },
  {
    image: "/src/images/creepersOnFour/frog.jpg",
    title: "אנקה",
    label: "The Toad/Frog",
    transliteration: `Anakah`,
  },
  {
    image: "/src/images/creepersOnFour/monkey.jpg",
    title: "כוח",
    label: "Primates",
    transliteration: `Choakh`,
  },
  {
    image: "/src/images/creepersOnFour/lizard.jpg",
    title: "לטאה",
    label: "The Lizard/Skink",
    transliteration: `La'tah`,
  },
  {
    image: "/src/images/creepersOnFour/salamander.jpg",
    title: "חמט",
    label: "The Salamander",
    transliteration: `Khomat`,
  },
  {
    image: "/src/images/creepersOnFour/squirrel.jpg",
    title: "תנשמת",
    label: "The Squirrel",
    transliteration: `Thanash-Math`,
  },
];

onFourRouter.get("/", (req, res) => {
  res.send(onFourData);
});

onFourRouter.get("/:onFourId", (req, res) => {
  const onFourId = req.params.onFourId;
  const foundOnFour = onFourData.find((onFour) => onFour._id === onFourId);
  if (!onFour) {
    const error = new Error(`The ${foundOnFour} could not be found.`);
    return next(error);
  }
  res.send(foundOnFour);
});

onFourRouter.post("/", (req, res) => {
  const newCreeper = req.body;
  newCreeper._id = uuidv4();
  onFourData.push(newCreeper);
  res.send(`successfully added ${newCreeper.title}`);
});

onFourRouter.delete("/:onFourId", (req, res) => {
  const onFourId = req.params.onFourId;
  const onFourIndex = onFourData.findIndex((creep) => creep._id === onFourId);
  onFourData.splice(onFourIndex, 1);
  res.send(`successfully deleted ${onFourId}`);
});

module.exports = onFourRouter;

const express = require("express");
const creeperRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const creeperData = [
  {
    image: "/src/images/creeper images/locust.jpg",
    title: "ארבה",
    label: "The Locust",
    transliteration: `Arbah`,
    _id: uuidv4(),
  },
  {
    image: "/src/images/creeper images/katydid.jpg",
    title: "סלעם",
    label: "The Katydid",
    transliteration: `Salaghm`,
    _id: uuidv4(),
  },
  {
    image: "/src/images/creeper images/cricket.jpg",
    title: "חרגל",
    label: "The Cricket.",
    transliteration: `Khargol`,
    _id: uuidv4(),
  },
  {
    image: "/src/images/creeper images/grasshopper.jpg",
    title: "חגב",
    label: "The Grasshopper",
    transliteration: `Khagav`,
    _id: uuidv4(),
  },
];

creeperRouter.get("/", (req, res) => {
  res.send(creeperData);
});

creeperRouter.get("/:creeperId", (req, res) => {
  const creeperId = req.params.creeperId;
  const foundCreeper = creeperData.find((creeper) => creeper._id === creeperId);
  if (!foundCreeper) {
    const error = new Error(`The ${foundCreeper} could not be found.`);
    return next(error);
  }
  res.send(foundCreeper);
});

creeperRouter.post("/", (req, res) => {
  const newCreeper = req.body;
  newCreeper._id = uuidv4();
  creeperData.push(newCreeper);
  res.send(`successfully added ${newCreeper.title}`);
});

creeperRouter.delete("/:creeperId", (req, res) => {
  const creeperId = req.params.creeperId;
  const creeperIndex = creeperData.findIndex(
    (creep) => creep._id === creeperId
  );
  creeperData.splice(creeperIndex, 1);
  res.send(`successfully deleted creeper with ID: ${creeperId}`);
});

module.exports = creeperRouter;

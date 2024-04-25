const express = require("express");
const beastRouter = express.Router();
const Beast = require("../models/beast.js");
const { v4: uuidv4 } = require("uuid");

const beastData = [
  {
    image: "/src/images/beast images/camel.jpg",
    title: "הגמל",
    label: `The Camel`,
    description: `The camel is a herbivore with two sections on each foot designed for nails. It has hooves that are relatively small nails at the tip of each toe in each respectable section. It lacks the true full split/seperation of the hoof that would constitute as having a divided hoof or a split hoof. When inspected the camel appears to have a split hoof but upon further inspection the realization of two seperate toes instead of hooves is apparent. The camel needs to have a "true" complete seperation which is a single hoof split into two toes. Thus, it has the correct diet but lacks the proper foot anatomy to be considered "טהור" (tahor) a pure food.`,
    _id: uuidv4(),
  },
  {
    image: "/src/images/beast images/zebra.jpg",
    title: "השפן",
    label: `The Zebra`,
    description: `This animal has to have hooves of some nature for it to even be mentioned in this passage of The Thorah. The modern day Christian and Judaic biblical understanding of this animal are quiet far removed from reality because of the implied animal which lacks hooves of any sort. The modern biblical understanding of this animal is the "rock-hyrax" or "coney". These animals used to be grouped with ungulates and as of now have been regrouped to the clade "Paenungulata" which is latin meaning almost having hooves. Showing that this animal was improperly grouped earlier on from a scientifical aspect. We can not be totally sure about which animal this is but by using geographical context of the land where these animals were referenced from and etymological understanding; we can deduce that this animal is the zebra. the hebrew word shafan means “to hide, to cover," The zebra's stripes act as a cover against insects that bite and suck blood. These insects are less likely to land on stripes as opposed to single colored patterns.`,
    _id: uuidv4(),
  },
  {
    image: "/src/images/beast images/horse.jpg",
    title: "הארנבת",
    label: `The Horse`,
    description: `This animal must also have hooves to be mentioned in this passage. The modern day Christian and Judaic biblical understanding of this animal is the “hare”. This can not be because of the hare/rabbit not having a hoof of any kind. Also the hare/rabbit is not a ruminant. Meaning it does not regurgitate its food to eat it once again. I only mention this to point out that the phrase "chew the cud" is only applied to ruminant animals. which is the process of rechewing the cud to further break down plant matter and stimulate digestion. "ruminant" comes from the Latin ruminare, which means "to chew over again". meaning even if hare was the correct animal mentioned in this verse the translation of ma'aghlath garah as “chews the cud” would still be faulty. once again we cannot be sure on which animal this is but can acknowledge the faulty translations given to us.`,
    _id: uuidv4(),
  },
  {
    image: "/src/images/beast images/pig2.jpeg",
    title: "החזיר",
    label: `The Pig`,
    description: `Thorah: Leviticus 11:7 “And the Khazyr, for it divides the hoof it is, and cleaves the cleft hoof, and the leaves/grass not does it chew, unclean it is for you all”. The pig, boar, or swine both wild and domesticated; have complete split hooves to be considered an acceptable food source. what they lack is the proper diet to be considered clean. They act purely off of survival and opportunistic instinct. Meaning they will forage for plants, vegtables and fruit like true herbivores but will also scavenge and eat animals, both dead or alive. ultimately making it "טמא" unclean/impure to consume`,
    _id: uuidv4(),
  },
  {
    image: "/src/images/beast images/Marine .jpg",
    title: `הכל במים`,
    label: `Everything in the waters`,
    description: `Thorah: Leviticus 11:9-12 "This will they eat from all which are in the waters, all which to it has fins and scales in the waters, in the seas, and in the rivers, them will you all eat. And all which does not have to it fins and scales in the seas, and in the rivers, from all that swarm the waters, and from all living animal which is in the waters, abominations they are to you all. And abominations they will be to you all, from their flesh not will you all eat, and their corpses to you will be an abomination. All which does not have to it fins and scales in the waters, an abomination it is to you all."`,
    _id: uuidv4(),
  },
];

beastRouter.get("/", (req, res) => {
  res.status(200).send(beastData);
});

beastRouter.get("/", async (req, res, next) => {
  try {
    const animals = await Beast.find();
    res.status(200).send(animals);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

beastRouter.get("/:beastId", async (req, res) => {
  try {
    const beastId = req.params.bountyId;
    const foundBeast = await Beast.findById(beastId);
    if (!foundBeast) {
      return res.status(404).send("Beast not found");
    }

    return res.status(200).json(foundBeast);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

beastRouter.post("/", async (req, res, next) => {
  try {
    const newBeast = new Beast(req.body);
    const savedBeast = await newBeast.save();
    res.status(201).send(savedBeast);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

beastRouter.delete("/:beastId", (req, res, next) => {
  Beast.findOneAndDelete({ _id: req.params.beastId }, (err, deletedItem) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    // Check if the item was not found
    if (!deletedItem) {
      res.status(404).send("Item not found");
      return;
    }
    res
      .status(200)
      .send(`Successfully deleted item ${deletedItem.title} from the database`);
  });
});

beastRouter.put("/:beastId", (req, res, next) => {
  beast.findOneAndUpdate(
    { _id: req.params.beastId },
    req.body, // update object with this data
    { new: true },
    (err, updatedBeast) => {
      if (err) {
        res.status(500);
        return next(err);
      }

      // Move this line inside the callback
      res.status(201).send(updatedBeast);
    }
  );
});

// Beast.find({ title: "The Camel"}, (err, people) => {
//     if (err) return res.status(500).send(err);
//     return res.status(200).send(beast);
// });
// beastRouter.get("/:beastId", (req, res, next) => {
//     const beastId = req.params.beastId
//     const foundBeast = beastData.find(beast => beast._id === beastId)
//     if(!foundBeast){
//         const error = new Error(`The ${foundBeast} could not be found.`)
//         return next(error)
//     }
//     res.status(200).send(foundBeast)
// })

// beastRouter.get("/search/genre", (req, res) => {
//     const genre = req.query.title
//     if(!genre){
//         const error = new Error("you must provide a genre")
//         return next(error)
//     }
//     const filterBeast = beastData.filter(beast => beast.title === genre)
//     res.send(filterBeast)
// })
// beastRouter.post("/", (req, res) => {
//     // req.body._id = uuidv4()
//     const newBeast = {
//         ...req.body,
//         _id : uuidv4()
//     }
//     // const newBeast = req.body
//     console.log(req.body);
//     // newBeast._id = uuidv4()
//     beastData.push(newBeast)
//     res.status(201).send(newBeast)
// })

// beastRouter.delete("/:beastId", (req, res) => {
//     const beastId = req.params.beastId
//     const beastIndex = beastData.findIndex(beast => beast._id === beastId)
//     if(beastIndex !== -1) {
//         beastData.splice(beastIndex, 1)
//         res.send(`successfully deleted beast with ID ${beastId}`)
//     }
//     else{
//         res.status(404).send(`Beast with ID ${beastId} not found`)
//     }
// })

module.exports = beastRouter;

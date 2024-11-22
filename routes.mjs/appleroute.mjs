// import appleschema from "../models/appleschema.mjs";
import Apples from "../models/appleschema.mjs";
import express from "express";
import apples from "../data/appdata.mjs";

const router = express.Router();

//Seed
router.get("/seed", async (req, res) => {
  await Apples.deleteMany({});
  await Apples.create(apples);

  res.send(`Database Seeded`);
});

//Create
router.post("/", async (req, res) => {
  try {
    let newApple = new Apples(req.body);
    await newApple.save();

    res.json(newApple);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//Read
router.get("/", async (req, res) => {
  try {
    const allApples = await Apples.find({});
    res.json(allApples);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const oneApple = await Apples.findById(req.params.id);
    res.json(oneApple);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//Update
router.put("/:id", async (req, res) => {
  try {
    const updatedApple = await Apples.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedApple);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  try {
    await Apples.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: "Item Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;

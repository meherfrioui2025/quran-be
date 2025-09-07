import express from "express";
import Surahs from "../../models/Surahs.model.js";
import Verse from "../../models/Verse.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const surahs = await Surahs.find().sort({ number: 1 });
    res.status(200).json(surahs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch surahs" });
  }
});

router.get("/:number", async (req, res) => {
  try {
    const surah = await Verse.findOne({ number: req.params.number });

    if (!surah) {
      return res.status(404).json({ error: "Surah not found" });
    }

    res.json(surah);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Surah" });
  }
});

export default router;

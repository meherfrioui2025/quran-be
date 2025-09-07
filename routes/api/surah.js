import express from "express";
import Surah from "../../models/Surah.model.js";

const router = express.Router();

// ✅ Get current user profile
router.get("/", async (req, res) => {
  try {
    const surahs = await Surah.find().sort({ number: 1 });
    res.status(200).json(surahs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch surahs" });
  }
});

export default router;

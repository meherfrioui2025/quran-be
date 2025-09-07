import mongoose from "mongoose";
import Verse from "../models/Verse.model.js";
import setupDB from "../utils/db.js";

const surahAlFatiha = {}

const seedSurah = async () => {
  try {
    setupDB();

    await Verse.create(surahAlFatiha);

    console.log("📖 Surah Al-Fatiha inserted successfully");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding Surah:", error);
    process.exit(1);
  }
};

seedSurah();

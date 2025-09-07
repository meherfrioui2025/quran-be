import mongoose from "mongoose";
import Surah from "../models/Surah.model.js";
import setupDB from "../utils/db.js";

import data from "./surahs.js" 

const seedDatabase = async () => {
  try {
    setupDB();

    // Clear old records
    await Surah.deleteMany({});
    console.log("Old data removed");

    // Insert new records
    await Surah.insertMany(data);
    console.log("New surahs inserted ✅");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();

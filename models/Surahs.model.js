import mongoose from "mongoose";

const SurahSchema = new mongoose.Schema({
  number: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  englishName: { type: String, required: true },
  englishNameTranslation: { type: String, required: true },
  numberOfAyahs: { type: Number, required: true },
  revelationType: { type: String, enum: ["Meccan", "Medinan"], required: true },
});

const Surah = mongoose.model("Surah", SurahSchema);

export default Surah;

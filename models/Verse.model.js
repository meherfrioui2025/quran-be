import mongoose from "mongoose";

const AyahSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  numberInSurah: { type: Number, required: true },
  text: { type: String, required: true },
});

const SurahSchema = new mongoose.Schema({
  number: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  englishName: { type: String, required: true },
  englishNameTranslation: { type: String, required: true },
  revelationType: { type: String, enum: ["Meccan", "Medinan"], required: true },
  numberOfAyahs: { type: Number, required: true },
  ayahs: [AyahSchema],
});

const Surah = mongoose.model("Verse", SurahSchema);

export default Surah;

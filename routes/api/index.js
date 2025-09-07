import express from "express";

import SurahsRoutes from "./surah.js";

const router = express.Router();

router.use("/surahs", SurahsRoutes);

export default router;

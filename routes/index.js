import express from "express";
import { config } from "dotenv";
config(); 

import apiRoutes from "./api/index.js";
import { app } from "../config/keys.js";

const { apiURL } = app;

const api = `/${apiURL}`;
const router = express.Router();

// api routes
router.get(process.env.API_URL,(req,res)=>"it is a live!")
router.use(api, apiRoutes);
router.use(api, (req, res) => res.status(404).json("No API route found"));

export default router;

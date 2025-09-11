import { config } from "dotenv";
import express from "express";
import cors from "cors";

import { port } from "./config/keys.js";
import setupDB from "./utils/db.js";
import routesURL from "./routes/index.js";
import job from "./services/cron.js";

config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Start cron
job.start();
console.log("Cron job started...");

(async () => {
  try {
    await setupDB();
    const server = app.listen(port, () => {
      console.log(
        `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
      );
    });
  } catch (err) {
    console.error("Failed to connect to DB, server not started", err);
    process.exit(1);
  }
})();

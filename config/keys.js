import { config } from "dotenv";
config();
export const port = process.env.PORT || 3000;
export const database = process.env.MONGO_URI;
export const app = { apiURL: process.env.BASE_API_URL };

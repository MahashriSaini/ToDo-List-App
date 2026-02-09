// config/config.js
import dotenv from "dotenv";

dotenv.config();

export const PORT = parseInt(process.env.PORT, 10) || 5000;
export const DB_URL = process.env.DATABASE_URL;
export const isDev = process.env.NODE_ENV === "development";
export const JWT_SECRET = process.env.JWT_SECRET;


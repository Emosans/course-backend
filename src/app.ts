import dotenv from "dotenv";
import express, { Application } from "express";
import { neon } from "@neondatabase/serverless";

dotenv.config();
const app: Application = express();

const port = process.env.DB_PORT || 5000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

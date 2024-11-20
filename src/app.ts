import dotenv from "dotenv";
import express, { Application } from "express";
import courserouter from "./routes/courseroutes";
import userrouter from "./routes/userroutes";
import { Request, Response } from "express";

dotenv.config();
const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to online learning platform");
});

app.use("/api/users", userrouter);
app.use("/api/courses", courserouter);

const port = process.env.DB_PORT || 5000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

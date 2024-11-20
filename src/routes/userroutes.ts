import express from "express";
import { registerUser, userLogin, getuserinfo } from "../controllers/register";
import { loginAuth } from "../middlewares/auth";

const userrouter = express.Router();

// register new user, login
userrouter.post("/register", registerUser as unknown as express.RequestHandler);
userrouter.post("/login", userLogin as unknown as express.RequestHandler);

// get all users
userrouter.get(
  "/profile",
  loginAuth as express.RequestHandler,
  getuserinfo as express.RequestHandler
);

export default userrouter;

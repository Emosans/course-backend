import express from "express";
import { registerUser, userLogin, getuserinfo } from "../controllers/register";

const userrouter = express.Router();

// register new user, login
userrouter.post("/auth/register", registerUser);
userrouter.post("/auth/login", userLogin as express.RequestHandler);

// get all users
userrouter.get("/profile/:name", getuserinfo as express.RequestHandler);

export default userrouter;

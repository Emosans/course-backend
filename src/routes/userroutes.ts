import express from "express";
import { registerUser, userLogin, getuserinfo } from "../controllers/register";

const router = express.Router();

// register new user, login
router.post("/auth/register", registerUser);
router.post("/auth/login", userLogin as express.RequestHandler);

// get all users
router.get("/profile/:name", getuserinfo as express.RequestHandler);

export default router;

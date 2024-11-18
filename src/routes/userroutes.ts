import express from "express";
import { registerUser, userLogin } from "../controllers/register";

const router = express.Router();

router.post("/auth/register", registerUser);
router.post("/auth/login", userLogin as express.RequestHandler);

export default router;

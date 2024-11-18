import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User";

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  try {
    const user = await User.create({ name, email, password, role });
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: "error creating user" });
  }
};

export const userLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(404).json({ error: "user not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch) return res.status(404).json({error: "invalid credentials"});
};

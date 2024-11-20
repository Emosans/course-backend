import { Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../db";
import jwt from "jsonwebtoken";

interface RequestBodyType {
  name: string;
  email: string;
  password: string;
  role: string;
}

// controllers for user
export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, role }: RequestBodyType = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: await bcrypt.hash(password, 10),
        role,
      },
    });
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: "error creating user" });
  }
};

export const userLogin = async (req: Request, res: Response) => {
  const { email, password }: Omit<RequestBodyType, "name" | "role"> = req.body;
  const user = await prisma.user.findFirst({ where: { email: email } });
  if (!user) return res.status(404).json({ error: "user not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(404).json({ error: "invalid credentials" });

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });
  if (!token) return res.status(500).json({ error: "could not create token" });
  return res.json({ token });
};

export const getuserinfo = async (req: Request, res: Response) => {
  if (!(req as any).user) {
    return res.status(404).json({ error: "user not found" });
  }

  const user = await prisma.user.findUnique({
    where: { email: (req as any).user.email },
  });

  if (!user) return res.json({ error: "user not found" });

  res.json({ user });
};

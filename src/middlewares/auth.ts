import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const loginAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.json({ error: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET!, (error, user) => {
    if (error) return res.status(403).json({ error: "forbidden" });

    (req as any).user = user as {
      name: string;
      email: string;
      password: string;
      role: string;
    };
    next();
  });
};

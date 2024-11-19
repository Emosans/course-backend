import { Request, Response } from "express";
import prisma from "../db";

interface RequestBodyType {
  title: string;
  description: string;
  teacherId: string;
}

// controllers for courses
export const getCourses = async (req: Request, res: Response) => {
  const courses = await prisma.course.findMany();

  res.json({ courses });
};

export const createCourse = async (req: Request, res: Response) => {
  const { title, description, teacherId }: RequestBodyType = req.body;

  try {
    const newCourse = await prisma.course.create({
      data: {
        title,
        description,
        teacherId,
      },
    });
    res.status(201).json({ newCourse });
  } catch (error) {
    res.status(500).json({ error: "error in creating in course" });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description }: Exclude<RequestBodyType, "teacherId"> =
    req.body;

  try {
    const prevCourse = await prisma.course.findUnique({
      where: { teacherId: id },
    });
    if (!prevCourse) return res.status(400).json({ error: "No such course" });

    prevCourse.title = title;
    prevCourse.description = description;
    res.json({ prevCourse });
  } catch (error) {
    res.status(500).json({ error: "Error updating the course" });
  }
};

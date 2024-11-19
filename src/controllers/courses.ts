import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { Course } from "../models/Course";

// controllers for courses
export const getCourses = async (req: Request, res: Response) => {
  const courses = await Course.findAll();

  res.json({ courses });
};

export const createCourse = async (req: Request, res: Response) => {
  const { title, description, teacherId } = req.body;

  try {
    const newCourse = await Course.create({ title, description, teacherId });
    res.status(201).json({ newCourse });
  } catch (error) {
    res.status(500).json({ error: "error in creating in course" });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  const { teacherId } = req.params;
  const { title, description } = req.body;

  try {
    const prevCourse = await Course.findByPk(teacherId);
    if (!prevCourse) return res.status(400).json({ error: "No such course" });

    prevCourse.title = title;
    prevCourse.description = description;
    await prevCourse.save();
    res.json({ prevCourse });
  } catch (error) {
    res.status(500).json({ error: "Error updating the course" });
  }
};

import express from "express";
import { getCourses, updateCourse, createCourse } from "../controllers/courses";

const router = express.Router();

// routes for courses
router.get("/courses", getCourses);
router.post("/courses/add", createCourse);
router.put("/courses/update/:id", updateCourse as express.RequestHandler);

export default router;

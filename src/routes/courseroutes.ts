import express from "express";
import { getCourses, updateCourse, createCourse } from "../controllers/courses";

const courserouter = express.Router();

// routes for courses
courserouter.get("/courses", getCourses);
courserouter.post("/courses/add", createCourse);
courserouter.put("/courses/update/:id", updateCourse as express.RequestHandler);

export default courserouter;

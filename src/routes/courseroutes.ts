import express from "express";
import {
  getCourses,
  updateCourse,
  createCourse,
  getCourse,
} from "../controllers/courses";

const courserouter = express.Router();

// routes for courses
courserouter.get("/courses", getCourses);
courserouter.post("/courses/add", createCourse);
courserouter.get(
  "/courses/:id",
  getCourse as unknown as express.RequestHandler
);
courserouter.put("/courses/update/:id", updateCourse as express.RequestHandler);

export default courserouter;

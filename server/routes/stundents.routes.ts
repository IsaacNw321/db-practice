import { Router } from "express";
import { 
  getStudents,
  getStudent,
  createStudent,
  updatedStudent,
  deleteStudent
  } from "../controllers/students.controllers";


const router = Router();

router.get("/students", getStudents);
router.get("/students/:id", getStudent);
router.post("/students", createStudent);
router.put("/students/:id", updatedStudent);
router.delete("/students/:id", deleteStudent);
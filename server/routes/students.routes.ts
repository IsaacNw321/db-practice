import { Router } from "express";
import { 
  getStudents,
  getStudent,
  createStudent,
  updatedStudent,
  deleteStudent,
  getStudentNotes,

  } from "../controllers/students.controllers.ts";


const router = Router();

router.get("/students", getStudents);
router.get("/students/:id", getStudent);
router.post("/students", createStudent);
router.put("/students/:id", updatedStudent);
router.delete("/students/:id", deleteStudent);
router.get("/students/:id/notes", getStudentNotes);


export default router;
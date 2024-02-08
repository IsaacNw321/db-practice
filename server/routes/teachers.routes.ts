import { Router } from "express";
import { 
  createTeacher,
  getTeacher,
  getTeachers,
  updateTeacher,
  deleteTeacher,
  getStudentsTeacher,
  getSubjectsTeacher
  } from "../controllers/teacher.controllers";


const router = Router();

router.get("/teachers", getTeachers);
router.get("/teachers/:id", getTeacher);
router.post("/teachers", createTeacher);
router.put("/teachers/:id", updateTeacher);
router.delete("/teachers/:id", deleteTeacher);
router.get("/teachers/:id/students", getStudentsTeacher);
router.get("/teachers/:id/subjects", getSubjectsTeacher);

export default router;
import { Router } from "express";
import { 
  createTeacher,
  getTeacher,
  getTeachers,
  updateTeacher,
  deleteTeacher
  } from "../controllers/teacher.controllers.ts";


const router = Router();

router.get("/teachers", getTeachers);
router.get("teachers/:id", getTeacher);
router.post("teachers", createTeacher);
router.put("teachers/:id", updateTeacher);
router.delete("teachers/:id", deleteTeacher);

export default router;
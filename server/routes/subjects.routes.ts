import { Router } from "express";
import {
  getSubjects,
  createSubject,
  updateSubject,
  deleteSubject
} from "../controllers/subjects.controllers"


const router = Router();

router.get("/subjects", getSubjects);
router.post("/subjects",createSubject);
router.put("/subjects/:id", updateSubject);
router.delete("/subjects/:id",deleteSubject);

export default router;
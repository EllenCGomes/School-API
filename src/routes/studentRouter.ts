import { Router } from "express"
import studentsController from "../controllers/studentsController"

const studentRouter = Router()

studentRouter.get("/", studentsController.getAllStudents)

studentRouter.get("/:id", studentsController.getStudent)

studentRouter.post("/", studentsController.createStudent)

studentRouter.put("/:id", studentsController.updateStudent)

studentRouter.delete("/:id", studentsController.deleteStudent)

export default studentRouter

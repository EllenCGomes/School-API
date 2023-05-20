import { Router } from "express"
import courseSubjectsController from "../controllers/courseSubjectsController"

const subjectRouter = Router()

subjectRouter.get("/", courseSubjectsController.getAllCoursesSubjects)

subjectRouter.get("/:id", courseSubjectsController.getCourseSubject)

subjectRouter.post("/", courseSubjectsController.createCourseSubject)

subjectRouter.put("/:id", courseSubjectsController.updateCourseSubject)

subjectRouter.delete("/:id", courseSubjectsController.deleteCourseSubject)

export default subjectRouter

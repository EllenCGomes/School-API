import express from "express"
import coursesClassesController from "../controllers/coursesClassesController"

const classRouter = express.Router()

classRouter.get("/", coursesClassesController.getAllCoursesClasses)

classRouter.get("/:id", coursesClassesController.getCourseClass)

classRouter.post("/", coursesClassesController.createCourseClass)

classRouter.put("/:id", coursesClassesController.updateCourseClass)

classRouter.delete("/:id", coursesClassesController.deleteCourseClass)

export default classRouter


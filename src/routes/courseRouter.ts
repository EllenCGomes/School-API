import express from "express"
import coursesController from "../controllers/coursesController"
import swaggerConfig from "../docs/swagger.config"

const courseRouter = express.Router()

courseRouter.get("/", coursesController.getAllCourses)

courseRouter.get("/:id", coursesController.getCourse)

courseRouter.post("/", coursesController.createCourse)

courseRouter.put("/:id", coursesController.updateCourse)

courseRouter.delete("/:id", coursesController.deleteCourse)

export default courseRouter

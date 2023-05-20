import { Router } from "express"
import professorsController from "../controllers/professorsController"

const professorRouter = Router()

professorRouter.get("/", professorsController.getAllProfessors)

professorRouter.get("/:id", professorsController.getProfessor)

professorRouter.post("/", professorsController.createProfessor)

professorRouter.put("/:id", professorsController.updateProfessor)

professorRouter.delete("/:id", professorsController.deleteProfessor)

export default professorRouter

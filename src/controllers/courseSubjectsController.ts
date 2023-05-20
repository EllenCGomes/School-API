import { NextFunction, Request, Response } from "express"
import connection from "../config/db_connection";

const getAllCoursesSubjects = async (request: Request, response: Response, next: NextFunction) => {
    try {
        await connection.execute(
            "SELECT * FROM tb_disciplina", function (error, results) {
                if (error) {
                    next(error)
                }
                response.status(200).send(results)
            }
        )
    } catch (exception) {
        next(exception)
    }
}


const getCourseSubject = async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id
    try {
        await connection.execute(
            "SELECT * FROM tb_disciplina WHERE id = ?", [id], function (error, results) {
                if (error) {
                    next(error)
                }
                response.status(200).send(results)
            }
        )
    } catch (exception) {
        next(exception)
    }
}

const createCourseSubject = async (request: Request, response: Response, next: NextFunction) => {
    const { nome } = request.body

    try {
        await connection.execute(
            "INSERT INTO tb_disciplina (nome) VALUES (?)", [nome], function (error, results) {
                if (error) {
                    next(error)
                }
                response.status(201).end()
            }
        )
    } catch (exception) {
        next(exception)
    }
}

const updateCourseSubject = async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id
    const { nome } = request.body

    try {
        await connection.execute(
            "UPDATE tb_disciplina SET nome = ? WHERE id = ?", [nome, id], function (error, results) {
                if (error) {
                    next(error)
                }
                response.status(204).end()
            }
        )
    } catch (exception) {
        next(exception)
    }
}

const deleteCourseSubject = async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id

    try {
        await connection.execute(
            "DELETE FROM tb_disciplina WHERE id = ?", [id], function (error, results) {
                if (error) {
                    next(error)
                }
                response.status(204).end()
            }
        )
    } catch (exception) {
        next(exception)
    }
}

export default { getAllCoursesSubjects, getCourseSubject, createCourseSubject, updateCourseSubject, deleteCourseSubject }

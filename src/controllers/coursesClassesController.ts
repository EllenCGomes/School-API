import { NextFunction, Request, Response } from "express"
import connection from "../config/db_connection";

const getAllCoursesClasses = async (request: Request, response: Response, next: NextFunction) => {
    try {
        await connection.execute(
            "SELECT * FROM tb_aula", function (error, results) {
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


const getCourseClass = async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id
    try {
        await connection.execute(
            "SELECT * FROM tb_aula WHERE id = ?", [id], function (error, results) {
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

const createCourseClass = async (request: Request, response: Response, next: NextFunction) => {
    const { dt_aula, tb_curso_id, tb_disciplina_id, tb_professor_id } = request.body
    const newDate = new Date(dt_aula)
    const mysqlDate = newDate.toISOString().split("T")[0];

    try {
        await connection.execute(
            "INSERT INTO tb_aula (dt_aula, tb_curso_id, tb_disciplina_id, tb_professor_id) VALUES (?, ?, ?, ?)", [mysqlDate, tb_curso_id, tb_disciplina_id, tb_professor_id], function (error, results) {
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

const updateCourseClass = async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id
    const { tb_curso_id, tb_disciplina_id, tb_professor_id } = request.body

    try {
        await connection.execute(
            "UPDATE tb_aula SET tb_curso_id = ?, tb_disciplina_id = ?, tb_professor_id= ? WHERE id = ?", [tb_curso_id, tb_disciplina_id, tb_professor_id, id], function (error, results) {
                if (error) {
                    next(error)
                }
                response.status(204).end()
            }
        )
    } catch (error) {
        next(error)
    }
}

const deleteCourseClass = async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id

    try {
        await connection.execute(
            "DELETE FROM tb_aula WHERE id = ?", [id], function (error, results) {
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

export default { getAllCoursesClasses, getCourseClass, createCourseClass, updateCourseClass, deleteCourseClass }

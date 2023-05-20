import { NextFunction, Request, Response } from "express"
import connection from "../config/db_connection";

const getAllCourses = async (request: Request, response: Response, next: NextFunction) => {
    try {
        await connection.execute(
            "SELECT * FROM tb_curso", function (error, results) {
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


const getCourse = async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id
    try {
        await connection.execute(
            "SELECT * FROM tb_curso WHERE id = ?", [id], function (error, results) {
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

const createCourse = async (request: Request, response: Response, next: NextFunction) => {
    const { nome, dt_inicio } = request.body
    const newDate = new Date(dt_inicio)
    const mysqlDate = newDate.toISOString().split("T")[0];

    try {
        await connection.execute(
            "INSERT INTO tb_curso (nome, dt_inicio) VALUES (?, ?)", [nome, mysqlDate], function (error, results) {
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

const updateCourse = async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id
    const { nome, dt_inicio } = request.body
    const newDate = new Date(dt_inicio)
    const mysqlDate = newDate.toISOString().split("T")[0];


    try {
        await connection.execute(
            "UPDATE tb_curso SET nome = ?, dt_inicio = ? WHERE id = ?", [nome, mysqlDate, id], function (error, results) {
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

const deleteCourse = async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id

    try {
        await connection.execute(
            "DELETE FROM tb_curso WHERE id = ?", [id], function (error, results) {
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

export default { getAllCourses, getCourse, createCourse, updateCourse, deleteCourse }

import connection from "../config/db_connection";
import { Request, Response, NextFunction } from "express";

const getAllStudents = async (request: Request, response: Response, next: NextFunction) => {
    try {
        await connection.execute(
            "SELECT * FROM tb_aluno", function (error, results) {
                if (error) {
                    next(error)
                }
                response.status(200).send(results)
            }
        )
    } catch (error) {
        next(error)
    }
}

const getStudent = async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id
    try {
        await connection.execute(
            "SELECT * FROM tb_aluno WHERE id = ?", [id], function (error, results) {
                if (error) {
                    next(error)
                }
                response.status(200).send(results)
            }
        )
    } catch (error) {

    }
}

const createStudent = async (request: Request, response: Response, next: NextFunction) => {
    const { nome, dt_nasc, email, tb_curso_id, ativo } = request.body
    const newDate = new Date(dt_nasc)
    const mysqlDate = newDate.toISOString().split("T")[0];

    try {
        await connection.execute(
            "INSERT INTO tb_aluno (nome, dt_nasc, dt_matricula, email, tb_curso_id, ativo) VALUE (?, ?, ?, ?, ?, ?)", [nome, mysqlDate, new Date(), email, tb_curso_id, ativo], function (error, results) {
                if (error) {
                    next(error)
                }
                response.status(201).json(results)
            }
        )
    } catch (error) {
        next(error)
    }
}

const updateStudent = async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id
    const { nome, dt_nasc, email, tb_curso_id, ativo } = request.body
    const newDate = new Date(dt_nasc)
    const mysqlDate = newDate.toISOString().split("T")[0];

    try {
        await connection.execute(
            "UPDATE tb_aluno SET nome = ?, dt_nasc = ?, email = ?, ativo = ?, tb_curso_id = ? WHERE id = ?", [nome, mysqlDate, email, ativo, tb_curso_id, id], function (error, results) {
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

const deleteStudent = (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id
    try {
        connection.execute(
            "DELETE FROM tb_aluno WHERE id = ?", [id], function (error, results) {
                if (error) {
                    next(error)
                }
                response.status(204).end()
            }
        )
    } catch (error) {

    }
}

export default { getAllStudents, getStudent, createStudent, updateStudent, deleteStudent }
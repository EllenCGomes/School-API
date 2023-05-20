import connection from "../config/db_connection";
import { Request, Response, NextFunction } from "express";

const getAllProfessors = async (request: Request, response: Response, next: NextFunction) => {
    try {
        await connection.execute(
            "SELECT * FROM tb_professor", function (error, results) {
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

const getProfessor = async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id
    try {
        await connection.execute(
            "SELECT * FROM tb_professor WHERE id = ?", [id], function (error, results) {
                if (error) {
                    next(error)
                }
                response.status(200).send(results)
            }
        )
    } catch (error) {

    }
}

const createProfessor = async (request: Request, response: Response, next: NextFunction) => {

    const { nome, cpf, email, tb_disciplina_id } = request.body

    try {
        await connection.execute(
            "INSERT INTO tb_professor (nome, cpf, dt_registro, email, tb_disciplina_id) VALUE (?, ?, ?, ?, ?)", [nome, cpf, new Date(), email, tb_disciplina_id], function (error, results) {
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

const updateProfessor = async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id
    const { nome, cpf, email, tb_disciplina_id } = request.body

    try {
        await connection.execute(
            "UPDATE tb_professor SET nome = ?, cpf = ?, email = ?, tb_disciplina_id = ? WHERE id = ?", [nome, cpf, email, tb_disciplina_id, id], function (error, results) {
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

const deleteProfessor = async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id
    try {
        await connection.execute(
            "DELETE FROM tb_professor WHERE id = ?", [id], function (error, results) {
                if (error) {
                    next(error)
                }
                response.status(204).end()
            }
        )
    } catch (error) {

    }
}

export default { getAllProfessors, getProfessor, createProfessor, updateProfessor, deleteProfessor }
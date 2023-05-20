import * as dotenv from "dotenv";
import express from "express" //npm i --save-dev @types/express
import classRouter from "./routes/classRouter";
import courseRouter from "./routes/courseRouter";
import subjectRouter from "./routes/subjectRouter";
import studentRouter from "./routes/studentRouter";
import professorRouter from "./routes/professorRouter";
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from './docs/swagger.config';

dotenv.config()

import * as swaggerDocument from "../swagger.json";

const app = express()

app.use(express.json())
app.use(cors());

// const swaggerDoc = swaggerJSDoc(swaggerConfig);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/cursos", courseRouter)
app.use("/disciplina", subjectRouter)
app.use("/aula", classRouter)
app.use("/alunos", studentRouter)
app.use("/professor", professorRouter)


const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log("running on port", PORT);
})
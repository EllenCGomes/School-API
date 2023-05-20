import * as dotenv from "dotenv";
dotenv.config()
import mysql from "mysql2"

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mydb",
    password: "root",
})


export default connection
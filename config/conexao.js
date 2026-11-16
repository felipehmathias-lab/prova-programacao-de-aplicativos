import mysql from "mysql2/promise"

const conexao = mysql.createPool({
    HOST: process.env.DB.HOST,
    PORT: Number(process.env.DB.PORT),
    USER: process.env.DB.USER,
    PASSWORD: process.env.DB.PASSWORD,
    DATABASE: process.env.DB.DATABASE
})

export default conexao
import mysql from 'mysql2/promise';
import dotenv from "dotenv"
dotenv.config()

const getDB = async () => {
    try {
        const connection = await mysql.createConnection({
        host: process.env.host,
        user: process.env.user,
        database: process.env.database,
        port: process.env.port,
        password: process.env.password
  });
    if (connection) {
            console.log("Connected to Database")
        }
        return connection
    } catch (err) {
    console.log(err);
    }
}

export {getDB}

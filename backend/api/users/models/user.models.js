import { getDB } from "../../../db.js";

const findUser = async (username, password) => {
    const connection = await getDB()
    try {
        const query = "SELECT UserID, FirstName, LastName, Role FROM Users WHERE Username = ? AND Password = SHA2(?,256)"
        const values = [username, password]

        const [result, fields] = await connection.execute(query, values);
        if (result.length !== 0) {
            return result
        } else {
            throw error
        }
    } catch (error) {
        throw error
    } finally {
        connection.end()
    }
}

const getStudents = async () => {
    const connection = await getDB()
    try {
        const query = "SELECT UserID, FirstName, LastName FROM Users WHERE Role = ?"
        const values = ["student"]
        
        const [result, fields] = await connection.execute(query, values)
        if (result.length !== 0) {
            return result
        } else {
            throw error
        }
    } catch (error) {
        throw error
    } finally {
        connection.end()
    }
}

export {findUser, getStudents}
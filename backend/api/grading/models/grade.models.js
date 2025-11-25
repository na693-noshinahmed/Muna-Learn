import {getDB} from "../../../db.js"

const createGrade = async (UserID, AssignmentID, AssignmentGrade) => {
    const connection = await getDB()
    try {
        const query = 'INSERT INTO `Grades`(`UserID`, `AssignmentID`, `Grade`) VALUES (?, ?, ?)';
        const values = [UserID, AssignmentID, AssignmentGrade];

        const [result, fields] = await connection.execute(query, values);

        return result
    } catch (err) {
        throw err
    } finally {
        connection.end()
    }
}

const getGradeByID = async (GradeID) => {
    const connection = await getDB()
    try {
        const query = "SELECT * FROM Grades WHERE GradeID = ?"
        const values = [GradeID]

        const [rows, fields] = await connection.execute(query, values)
        return rows
    } catch (err){
        throw err
    } finally {
        connection.end()
    }
}

const getGradesByFilter = async (column1, value1, column2, value2) => {
    const connection = await getDB()
    try {
        let query = `SELECT Grades.GradeID, Grades.Grade, Assignments.AssignmentID, Assignments.AssignmentName, Users.FirstName, Users.LastName
         FROM ((Grades INNER JOIN Assignments ON Assignments.AssignmentID = Grades.AssignmentID)
         INNER JOIN Users ON Grades.UserID = Users.UserID) WHERE Grades.${column1} = ?`
        let values = [value1]
        if (typeof column2 !== "undefined") {
            query += ` AND Grades.${column2} = ?`
            values = [...values, value2]
        }
        const [rows, fields] = await connection.execute(query, values)
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.end()
    }
}

const updateGrade = async (GradeID, value) => {
    const connection = await getDB()
    try {
        const query = `UPDATE Grades SET Grade = ? WHERE GradeID = ?`
        const values = [value, GradeID];

        const [result, fields] = await connection.execute(query, values);
        return result
    } catch (err) {
        throw err
    } finally {
        connection.end()
    }
}

const deleteGrade = async(GradeID) => {
    const connection = await getDB()
    try {
        const query = "DELETE FROM Grades WHERE GradeID = ?"
        const values = [GradeID]

        const [result, fields] = await connection.execute(query, values)
        return result
    } catch (err){
        throw err
    } finally {
        connection.end()
    }
}

export { getGradeByID, createGrade, updateGrade, deleteGrade, getGradesByFilter }
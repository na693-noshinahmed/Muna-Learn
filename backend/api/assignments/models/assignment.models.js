import {getDB} from "../../../db.js"

const createAssignment = async (AssignmentName, NumberQuestions, Instructions) => {
    const connection = await getDB()
    try {
        const query = 'INSERT INTO `Assignments`(AssignmentName, NumberQuestions, Instructions) VALUES (?, ?, ?)';
        const values = [AssignmentName, NumberQuestions, Instructions];
        const [result, fields] = await connection.execute(query, values);
        return result
    } catch (err) {
        throw err;
    } finally {
        connection.end()
    }
}

const getAssignmentByID = async (AssignmentID) => {
    const connection = await getDB()
    try {
        const query = 'SELECT * FROM `Assignments` WHERE AssignmentID = ?'
        const values = [AssignmentID]
        const [rows, fields] = await connection.execute(query, values)
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.end()
    }
}

const getAssignments = async () => {
    const connection = await getDB()
    try {
        const query = 'SELECT * FROM `Assignments`'
        const [rows, fields] = await connection.execute(query)
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.end()
    }
}

const updateAssignment = async (AssignmentID, AssignmentName, NumberQuestions, Instructions) => {
    const connection = await getDB()
    try {
        const query = `UPDATE Assignments SET AssignmentName= ?, NumberQuestions= ?, Instructions = ? WHERE AssignmentID = ?`
        const values = [AssignmentName, NumberQuestions, Instructions, AssignmentID];

        const [result, fields] = await connection.execute(query, values);
        return result
    } catch (err) {
        throw err  
    } finally {
        connection.end()
    }
}

const deleteAssignment = async(AssignmentID) => {
    const connection = await getDB()
    try {
        const query = "DELETE FROM Assignments WHERE AssignmentID = ?"
        const values = [AssignmentID]

        const [result, fields] = await connection.execute(query, values)
        return result
    } catch (err){
        throw err
    } finally {
        connection.end()
    }
}

const getAssignmentWithQuestions = async (AssignmentID) => {
    const connection = await getDB()
    try {
        const query = "SELECT Assignments.AssignmentID, Assignments.AssignmentName, Assignments.NumberQuestions, " +
         "Assignments.Instructions, Questions.QuestionID, Questions.Question, Questions.CorrectAnswer " + 
         "FROM Assignments INNER JOIN Questions on Assignments.AssignmentID=Questions.AssignmentID " + 
         "WHERE Assignments.AssignmentID = ? "
        const values = [AssignmentID]

        const [result, fields] = await connection.execute(query, values)
        return result
    } catch (err){
        throw err
    } finally {
        connection.end()
    }
}

export {createAssignment, getAssignments, updateAssignment, deleteAssignment, getAssignmentWithQuestions, getAssignmentByID}
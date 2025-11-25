import { getDB } from "../../../db.js"

const getQuestionByID = async (QuestionID) => {
    const connection = await getDB()
    try {
        const query = 'SELECT * FROM `Questions` WHERE QuestionID = ?'
        const values = [QuestionID]
        const [rows, fields] = await connection.execute(query, values)
        return rows
    } catch (err) {
        throw err
    } finally {
        connection.end()
    }
}

const createQuestion = async (AssignmentID, Question, CorrectAnswer) => {
    const connection = await getDB()
    try {
        const query = `INSERT INTO Questions (AssignmentID, Question, CorrectAnswer) VALUES 
        (?, ?, ?)`
        const values = [AssignmentID, Question, CorrectAnswer]
        const result = connection.execute(query, values)
        return result
    } catch (err) {
        throw err
    } finally {
        connection.end()
    }
}

const updateQuestion = async (QuestionID, Question, CorrectAnswer) => {
    const connection = await getDB()
    try {
        const query = `UPDATE Questions SET Question = ?, CorrectAnswer = ? WHERE QuestionID = ?`
        const values = [Question, CorrectAnswer, QuestionID];
        const [result, fields] = await connection.execute(query, values);
        return result
    } catch (err) {
        throw err  
    } finally {
        connection.end()
    }
}

export { getQuestionByID, createQuestion, updateQuestion }
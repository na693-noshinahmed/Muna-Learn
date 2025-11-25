import {getDB} from "../../../db.js"

const createAnswer = async (UserID, QuestionID, Answer) => {
    const connection = await getDB()
    try {
        const query = 'INSERT INTO `StudentAnswers`(`UserID`, `QuestionID`, `Answer`) VALUES (?, ?, ?)';
        const values = [UserID, QuestionID, Answer];

        const [result, fields] = await connection.execute(query, values);

        return result
    } catch (err) {
        throw err
    } finally {
        connection.end()
    }
}

const updateAnswer = async (AnswerID, newAnswer) => {
    const connection = await getDB()
    try {
        const query = `UPDATE StudentAnswers SET Answer = ? WHERE AnswerID = ?`
        const values = [newAnswer, AnswerID];

        const [result, fields] = await connection.execute(query, values);
        return result
    } catch (err) {
        throw err
    } finally {
        connection.end()
    }
}

const getAnswerByID = async (AnswerID) => {
    const connection = await getDB()
    try {
        const query = "SELECT * FROM StudentAnswers WHERE AnswerID = ?"
        const values = [AnswerID]

        const [result, fields] = await connection.execute(query, values)
        return result
    } catch (err){
        throw err
    } finally {
        connection.end()
    }
}

const getStudentAssignment = async (UserID, AssignmentID) => {
    const connection = await getDB()
    try {
        const query = "SELECT Questions.Question, Questions.CorrectAnswer, StudentAnswers.AnswerID, StudentAnswers.Answer FROM StudentAnswers INNER JOIN Questions ON StudentAnswers.QuestionID = Questions.QuestionID WHERE StudentAnswers.UserID = ? and Questions.AssignmentID = ?"
        const values = [UserID, AssignmentID]

        const [result, fields] = await connection.execute(query, values)
        return result
    } catch (error){
        throw error
    } finally {
        connection.end()
    }
}

export {createAnswer, updateAnswer, getAnswerByID, getStudentAssignment}
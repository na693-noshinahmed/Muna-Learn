import { createAnswer, updateAnswer, getAnswerByID, getStudentAssignment } from "../models/studentanswer.models.js";

const createAnswerService = async (UserID, Answers) => {
    try {
        var answers = []
        for (let answerIndex = 0; answerIndex < Answers.length; answerIndex++) {
            const {QuestionID, Answer} = Answers[answerIndex]
            const answer = await createAnswer(UserID, QuestionID, Answer)
            answers = [...answers, answer]
        }
        return answers 
    } catch (error){
        throw error
    }
}

const updateAnswerService = async (Answers) => {
    try {
        var updateResult = []
        for (let answerIndex = 0; answerIndex < Answers.length; answerIndex++) {
            const {AnswerID, Answer} = Answers[answerIndex]
            const findAnswer = await getAnswerByID(AnswerID)
            if (findAnswer.length === 0) {
                throw new Error()
            }
            const result = await updateAnswer(AnswerID, Answer)
            updateResult = [...updateResult, result]
        }
        return updateResult
    } catch (error){
        throw error
    }
}

const getStudentAssignmentService = async (UserID, AssignmentID, role) => {
    try {
        let result = await getStudentAssignment(UserID, AssignmentID)
        if (role === "teacher") {
            return result
        } else if (role === "student") {
            for (let answer = 0; answer < result.length; answer++) {
                result[answer].CorrectAnswer = ""
            }
            console.log(result)
            return result
        }
    } catch (error){
        throw error
    }
}

export { createAnswerService, updateAnswerService, getStudentAssignmentService }
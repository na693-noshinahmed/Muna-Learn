import { getAssignments, getAssignmentByID, createAssignment, updateAssignment, deleteAssignment, getAssignmentWithQuestions,  } from "../models/assignment.models.js";
import { getQuestionByID, createQuestion, updateQuestion } from "../models/question.models.js"

const getAssignmentsService = async () => {
    try {
        const result = await getAssignments()
        return result
    } catch (error){
        throw error
    }
}

const getAssignmentByIDService = async (AssignmentID) => {
    try {
        const result = await getAssignmentByID(AssignmentID)
        return result
    } catch (error) {
        throw error
    }
}

const createAssignmentService = async (AssignmentDetails, Questions) => {
    try {
        const { AssignmentName, NumberQuestions, Instructions } = AssignmentDetails
        const assignmentResult = await createAssignment(AssignmentName, NumberQuestions, Instructions)
        const AssignmentID = assignmentResult.insertId
        var questionsResult = []
        for (let questionIndex = 0; questionIndex < Questions.length; questionIndex++) {
            const { Question, CorrectAnswer } = Questions[questionIndex]
            var result = await createQuestion(AssignmentID, Question, CorrectAnswer)
            questionsResult = [...questionsResult, result]
        }
        return [assignmentResult, questionsResult]
    } catch (error) {
        throw error
    }
}

const updateAssignmentService = async (AssignmentID, AssignmentDetails, Questions) => {
    try {
        const {AssignmentName, NumberQuestions, Instructions} = AssignmentDetails
        
        const findAssignment = await getAssignmentByID(AssignmentID)
        if (findAssignment.length === 0) {
            throw new Error()
        }
        const assignmentResult = await updateAssignment(AssignmentID, AssignmentName, NumberQuestions, Instructions)

        let questionsResult = []
        for (let questionIndex = 0; questionIndex < Questions.length; questionIndex++) {
            const {QuestionID, Question, CorrectAnswer} = Questions[questionIndex]
            const findQuestion = await getQuestionByID(QuestionID)
            if (findQuestion.length === 0) {
                throw new Error()
            }
            const result = await updateQuestion(QuestionID, Question, CorrectAnswer)
            questionsResult = [...questionsResult, result]
        }

        return [assignmentResult, questionsResult]
    } catch (error) {
        throw error
    }
}

const deleteAssignmentService = async (AssignmentID) => {
    try {
        const findAssignment = await getAssignmentByID(AssignmentID)
        if (findAssignment.length === 0) {
            throw new Error()
        }
        const result = await deleteAssignment(AssignmentID)
        return result
    } catch (error) {
        throw error
    }
}

const getAssignmentTeacherViewService = async (AssignmentID) => {
    try {
        const findAssignment = await getAssignmentByID(AssignmentID)
        if (findAssignment.length === 0) {
            throw new Error()
        }
        const result = await getAssignmentWithQuestions(AssignmentID)
        let format = {
            "AssignmentDetails": {
                "AssignmentID": result[0].AssignmentID,
                "AssignmentName": result[0].AssignmentName,
                "NumberQuestions": result[0].NumberQuestions,
                "Instructions": result[0].Instructions
            },
            "Questions": [

            ]
        }
        for (let i = 0; i < result.length; i++) {
            let question = {
                "QuestionID": result[i].QuestionID,
                "Question": result[i].Question,
                "CorrectAnswer": result[i].CorrectAnswer
            }
            format.Questions = [...format.Questions, question]
        }

        return format
    } catch (error) {
        throw error
    }
}

const getAssignmentStudentViewService = async (AssignmentID) => {
    try {
        const findAssignment = await getAssignmentByID(AssignmentID)
        if (findAssignment.length === 0) {
            throw new Error()
        }
        const result = await getAssignmentWithQuestions(AssignmentID)

        let format = {
            "AssignmentDetails": {
                "AssignmentName": result[0].AssignmentName,
                "NumberQuestions": result[0].NumberQuestions,
                "Instructions": result[0].Instructions
            },
            "Questions": [

            ]
        }
        for (let i = 0; i < result.length; i++) {
            let question = {
                "QuestionID": result[i].QuestionID,
                "Question": result[i].Question,
            }
            format.Questions = [...format.Questions, question]
        }

        return format
    } catch (error) {
        throw error
    }
}

export {getAssignmentsService, createAssignmentService, updateAssignmentService, deleteAssignmentService, getAssignmentTeacherViewService, getAssignmentStudentViewService, getAssignmentByIDService}
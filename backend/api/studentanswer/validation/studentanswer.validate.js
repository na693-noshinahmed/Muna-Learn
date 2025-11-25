import joi from "joi"

const createSchema = joi.object({
    QuestionID: joi.number().integer().required(),
    Answer: joi.required()
})

const putSchema = joi.object({
    AnswerID:  joi.number().integer().required(),
    Answer: joi.required()
})


const getStudentAssignmentSchema = joi.object({
    UserID: joi.number().integer().optional(),
    AssignmentID: joi.number().integer().required()
})

const userIdParamSchema = joi.object({
    UserID: joi.number().integer().required()
})

export {createSchema, putSchema, getStudentAssignmentSchema, userIdParamSchema}
import joi from "joi"

const createSchema = joi.object({
    UserID: joi.number().integer().required(),
    AssignmentID: joi.number().integer().required(),
    AssignmentGrade: joi.number().required()
})

const putSchema = joi.object({
    Grade: joi.number().integer().required()
})

const idParamSchema = joi.object({
    GradeID: joi.number().integer().required()
})

const filterParamSchema = joi.object({
    AssignmentID: joi.number().integer().optional(),
    UserID: joi.number().integer().optional()
})

export {createSchema, putSchema, idParamSchema, filterParamSchema}
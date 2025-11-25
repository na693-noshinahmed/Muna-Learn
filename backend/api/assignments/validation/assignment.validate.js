import joi from "joi"

const AssignmentDetailsSchema = joi.object({
    AssignmentName: joi.string().required(),
    NumberQuestions: joi.number().integer().required(),
    Instructions: joi.string().required()
})

const AssignmentIdParamSchema = joi.object({
    AssignmentID: joi.number().integer().required()
})

export {AssignmentDetailsSchema, AssignmentIdParamSchema}
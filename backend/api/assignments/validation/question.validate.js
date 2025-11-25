import joi from "joi"

const questionSchema = joi.object({
    QuestionID: joi.number().integer().optional(),
    Question: joi.string().required(),
    CorrectAnswer: joi.required()
})

export {questionSchema}
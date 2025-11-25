import { createSchema, putSchema, userIdParamSchema } from "../studentanswer/validation/studentanswer.validate.js"

const validateCreateAnswers = (req, res, next) => {
    const {UserID} = req.user
    const {Answers} = req.body
    const {error} = userIdParamSchema.validate({UserID})
    if (error) {
        return res.status(400).json({success:false, message:error.message})
    }
    for (let answerIndex = 0; answerIndex < Answers.length; answerIndex++) {
        const {error} = createSchema.validate(Answers[answerIndex])
        if (error) {
            return res.status(400).json({success:false, message:error.message})
        }
    }
    next()
}

const validateUpdateAnswers = (req, res, next) => {
    const {Answers} = req.body
    for (let answerIndex = 0; answerIndex < Answers.length; answerIndex++) {
        const {error} = putSchema.validate(Answers[answerIndex])
        if (error) {
            return res.status(400).json({success:false, message:error.message})
        }
        }
    next()
}

export {validateCreateAnswers, validateUpdateAnswers}
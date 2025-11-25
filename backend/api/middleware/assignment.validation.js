import { AssignmentDetailsSchema } from "../assignments/validation/assignment.validate.js"
import { questionSchema } from "../assignments/validation/question.validate.js"

const validateAssignmentDetails = (req, res, next) => {
    const {AssignmentDetails} = req.body
    const {error} = AssignmentDetailsSchema.validate(AssignmentDetails)
    if (error) {
        console.log(error)
        return res.status(400).json({success:false, message:error.message})
    } else {
        next()
    }
}

const validateQuestions = (req, res, next) => {
    const {Questions} = req.body
    for (let questionIndex = 0; questionIndex < Questions.length; questionIndex++) {
        let {error} = questionSchema.validate(Questions[questionIndex])
        if (error) {
            console.log(error)
            return res.status(400).json({success:false, message:error.message})
        }
    }
    next()
}

export {validateAssignmentDetails, validateQuestions}
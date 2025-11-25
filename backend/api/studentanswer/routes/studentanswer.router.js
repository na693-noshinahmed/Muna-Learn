import { createAnswerController, updateAnswerController, getStudentsAssignmentController } from "../controllers/studentanswer.controllers.js"
import { getStudentAssignmentSchema } from "../validation/studentanswer.validate.js"
import {validateCreateAnswers, validateUpdateAnswers} from "../../middleware/studentanswer.validation.js"
import {validateQuery} from "../../middleware/validation.js"
import { checkToken } from "../../middleware/authenticate.js"
import express from "express"

const router = express.Router()

router.post("/", checkToken, validateCreateAnswers, createAnswerController)

router.put("/", checkToken, validateUpdateAnswers, updateAnswerController)

router.get("/", checkToken, validateQuery(getStudentAssignmentSchema), getStudentsAssignmentController)

export default router
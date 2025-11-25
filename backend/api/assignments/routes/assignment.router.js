import express from "express"
import { getAssignmentsController, createAssignmentController, updateAssignmentController, 
    deleteAssignmentController, getAssignmentTeacherViewController, 
    getAssignmentStudentViewController, getAssignmentByIDController } from 
    "../controllers/assignment.controllers.js"
import { validateAssignmentDetails, validateQuestions } from "../../middleware/assignment.validation.js"
import {AssignmentIdParamSchema} from "../validation/assignment.validate.js"
import { validatePath } from "../../middleware/validation.js";
import { checkRole, checkToken } from "../../middleware/authenticate.js"

const router = express.Router()

router.get("/", getAssignmentsController)

router.post("/", checkRole, validateAssignmentDetails, validateQuestions, createAssignmentController)

router.put("/:AssignmentID", checkRole, validatePath(AssignmentIdParamSchema), validateAssignmentDetails, validateQuestions, updateAssignmentController)

router.delete("/:AssignmentID", checkRole, validatePath(AssignmentIdParamSchema), deleteAssignmentController)

router.get("/:AssignmentID/AssignmentTeacherView", checkRole, validatePath(AssignmentIdParamSchema), getAssignmentTeacherViewController)

router.get("/:AssignmentID/AssignmentStudentView", validatePath(AssignmentIdParamSchema), getAssignmentStudentViewController)

router.get("/:AssignmentID", checkToken, validatePath(AssignmentIdParamSchema), getAssignmentByIDController)

export default router
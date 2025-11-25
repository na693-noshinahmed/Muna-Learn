import express from "express"
import { createGradeController, updateGradeController, deleteGradeController, getFilteredGradesController } from "../controllers/grade.controllers.js"
import { createSchema, putSchema, idParamSchema, filterParamSchema } from "../validation/grade.validate.js";
import { validateBody, validatePath, validateQuery } from "../../middleware/validation.js";
import {checkRole, checkToken} from "../../middleware/authenticate.js"

const router = express.Router()

router.post("/", checkRole, validateBody(createSchema), createGradeController)

router.put("/:GradeID", checkRole, validatePath(idParamSchema), validateBody(putSchema), updateGradeController)

router.delete("/:GradeID", checkRole, validatePath(idParamSchema), deleteGradeController)

router.get("/filter", checkToken, validateQuery(filterParamSchema), getFilteredGradesController)

export default router
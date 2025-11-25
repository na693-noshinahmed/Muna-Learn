import express from "express"
import { loginSchema } from "../validation/user.validate.js";
import { findUserController, getStudentsController, returnRoleFromCookieController, logoutUserController } from "../controllers/user.controllers.js";
import { validateBody } from "../../middleware/validation.js";
import { checkToken, checkRole } from "../../middleware/authenticate.js"; 

const router = express.Router()

router.post("/login", validateBody(loginSchema), findUserController)

router.get("/users/students", checkToken, checkRole, getStudentsController)

router.get("/users/cookie", checkToken, returnRoleFromCookieController)

router.post("/logout", logoutUserController)

export default router
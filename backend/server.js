import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import assignmentRouter from "./api/assignments/routes/assignment.router.js"
import gradeRouter from "./api/grading/routes/grade.router.js"
import answerRouter from "./api/studentanswer/routes/studentanswer.router.js"
import userRouter from "./api/users/routes/user.router.js"
import { checkToken } from "./api/middleware/authenticate.js"

const server = express()

server.use(express.json())

server.use(bodyParser.json())

server.use(cookieParser(process.env.JWT_SECRET))

server.use("/api", userRouter)

server.use(checkToken)

server.use("/api/grades", gradeRouter)

server.use("/api/assignments", assignmentRouter)

server.use("/api/answers", answerRouter)

server.listen(3000, () => {
    console.log("server is running on port 3000...")
})
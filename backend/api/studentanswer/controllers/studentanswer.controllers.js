import { createAnswerService, updateAnswerService, getStudentAssignmentService } from "../services/studentanswer.services.js";

const createAnswerController = async (req, res) => {
    try {
        const {UserID} = req.user
        console.log(UserID)
        const {Answers} = req.body
        console.log(Answers)
        const result = await createAnswerService(UserID, Answers)
        console.log(result)
        res.status(201).json({success:true, message:"Answers submitted"})
    } catch (err) {
        console.log(err)
        res.status(500).json({success:false, message:"Could not submit answers"})
    }
}

const updateAnswerController = async (req, res) => {
    try {
        const {Answers} = req.body
        const result = await updateAnswerService(Answers)
        console.log(result)
        res.status(200).json({success:true, message:"Answers updated"})
    } catch (err){
        console.log(err)
        res.status(500).json({success:false, message:"Answers could not be updated"})
    }
}

const getStudentsAssignmentController = async (req, res) => {
    try {
        let {UserID, AssignmentID} = req.query
        const role = req.user.Role
        if (!UserID) {
            UserID = req.user.UserID
        }
        const result = await getStudentAssignmentService(UserID, AssignmentID, role)
        res.status(200).json({success:true, data: result})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"Could not retrieve data"})
    }
}

export { createAnswerController, updateAnswerController, getStudentsAssignmentController}
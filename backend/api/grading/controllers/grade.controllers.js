import { createGradeService, updateGradeService, deleteGradeService, getFilteredGradesService } from "../services/grade.services.js";

const createGradeController = async (req, res) => {
    try {
        const {UserID, AssignmentID, AssignmentGrade} = req.body
        const result = await createGradeService(UserID, AssignmentID, AssignmentGrade)
        console.log(result)
        res.status(201).json({success:true, message:"Grade Added"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"Could not post grade"})
    }
}

const updateGradeController = async (req, res) => {
    try {
        const {Grade} = req.body
        const {GradeID} = req.params
        const result = await updateGradeService(GradeID, Grade)
        console.log(result)
        res.status(200).json({success:true, message:"Grade Updated"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"Could not update grade"})
    }
}

const deleteGradeController = async (req, res) => {
    try {
        const {GradeID} = req.params
        const result = await deleteGradeService(GradeID)
        console.log(result)
        res.status(204).json({success:true, data:"Grade Deleted"})
    } catch(error) {
        console.log(error)
        res.status(500).json({success:false, message:"Could not delete grade"})
    }
}

const getFilteredGradesController = async (req, res) => {
    try {
        let column1 = Object.keys(req.query)[0]
        let column2 = Object.keys(req.query)[1]
        let value1 = req.query[column1]
        let value2 = req.query[column2]
        if (!column1 && !column2) {
            column1 = "UserID"
            value1 = req.user.UserID
        }
        const result = await getFilteredGradesService(column1, value1, column2, value2)
        console.log(result)
        res.status(200).json({success:true, data:result})
    } catch (error){
        console.log(error)
        res.status(500).json({success:false, message:"Could not get grade(s)"})
    }
}

export { createGradeController, updateGradeController, deleteGradeController, getFilteredGradesController}
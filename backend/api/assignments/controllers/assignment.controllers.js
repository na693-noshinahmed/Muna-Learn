import { getAssignmentsService, createAssignmentService, updateAssignmentService, deleteAssignmentService, getAssignmentTeacherViewService, getAssignmentStudentViewService, getAssignmentByIDService } from "../services/assignment.services.js";

const getAssignmentsController = async (req, res) => {
    try {
        const result = await getAssignmentsService()
        res.status(200).json({success:true, data:result})
    } catch (error){
        console.log(error)
        res.status(500).json({success:false, message:"Could not retrieve data"})
    }
}

const getAssignmentByIDController = async (req, res) => {
    try {
        const {AssignmentID} = req.params
        console.log(AssignmentID)
        const result = await getAssignmentByIDService(AssignmentID)
        res.status(200).json({success:true, data:result})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"Could not retrieve data"})
    }
}

const createAssignmentController = async (req, res) => {
    try {
        const {AssignmentDetails, Questions} = req.body
        const result = await createAssignmentService(AssignmentDetails, Questions)
        console.log(result)
        res.status(201).json({success:true, message:"Assignment Created"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"Could not create assignment"})
    }
}

const updateAssignmentController = async (req, res) => {
    try {
        const { AssignmentID } = req.params
        const {AssignmentDetails, Questions} = req.body
        console.log(AssignmentID, AssignmentDetails, Questions)
        const result = await updateAssignmentService(AssignmentID, AssignmentDetails, Questions)
        console.log(result)
        res.status(200).json({success:true, message:"Assignment Updated"})
    } catch (err){
        console.log(err)
        res.status(500).json({success:false, message:"Could not update assignment"})
    }
}

const deleteAssignmentController = async (req, res) => {
    try {
        const {AssignmentID} = req.params
        const result = await deleteAssignmentService(AssignmentID)
        console.log(result)
        res.status(200).json({success:true, message:"Assignment Deleted"})
    } catch(error) {
        console.log(error)
        res.status(500).json({success:false, message:"Could not delete assignment"})
    }
}

const getAssignmentTeacherViewController = async (req, res) => {
    try {
        const {AssignmentID} = req.params
        const result = await getAssignmentTeacherViewService(AssignmentID)
        console.log(result)
        res.status(200).json({success:true, data:result})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"Could not retrieve data"})
    }
}

const getAssignmentStudentViewController = async (req, res) => {
    try {
        const {AssignmentID} = req.params
        const result = await getAssignmentStudentViewService(AssignmentID)
        console.log(result)
        res.status(200).json({success:true, data:result})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"Could not retrieve data"})
    }
}

export {getAssignmentsController, getAssignmentByIDController, createAssignmentController, updateAssignmentController, deleteAssignmentController, getAssignmentTeacherViewController, getAssignmentStudentViewController}
import { createGrade, getGradeByID, updateGrade, deleteGrade, getGradesByFilter } from "../models/grade.models.js";


const createGradeService = async (UserID, AssignmentID, AssignmentGrade) => {
    try {
        const result = await createGrade(UserID, AssignmentID, AssignmentGrade)
        return result
    } catch (error) {
        throw error
    }
}

const updateGradeService = async (GradeID, Grade) => {
    try {
        const findGrade = await getGradeByID(GradeID)
        if (findGrade.length === 0) {
            throw new Error()
        }
        const result = await updateGrade(GradeID, Grade)
        return result
    } catch (error){
        throw error
    }
}

const deleteGradeService = async (GradeID) => {
    try {
        const findGrade = await getGradeByID(GradeID)
        if (findGrade.length === 0) {
            throw new Error()
        }
        const result = await deleteGrade(GradeID)
        return result
    } catch (error) {
        throw error
    }
}

const getFilteredGradesService = async (column1, value1, column2, value2) => {
    try {
        const result = await getGradesByFilter(column1, value1, column2, value2)
        return result
    } catch (error) {
        throw error
    }
}

export { createGradeService, updateGradeService, deleteGradeService, getFilteredGradesService}
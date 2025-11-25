import { handleErrors } from "../../../errors/handleErrors"

async function createSubmissionLoader({params}){
    try {
        const {AssignmentID} = params
        
        let response = await fetch(`/api/assignments/${AssignmentID}/AssignmentStudentView`, {
            method: "GET",
            credentials: "include"
        }) 
        if (handleErrors(response)) return
        response = await response.json()

        if (response.success) {
            return response.data
        }
    } catch (error) {
        console.log("Fetch error: ", error)
    }
}

export {createSubmissionLoader}
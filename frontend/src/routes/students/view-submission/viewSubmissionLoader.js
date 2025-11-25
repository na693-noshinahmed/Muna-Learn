import { handleErrors } from "../../../errors/handleErrors"

async function viewSubmissionLoader({params}) {
    try {
        const {AssignmentID} = params
        let answers = await fetch (`/api/answers?AssignmentID=${AssignmentID}`, {
            method: "GET",
            credentials: "include"
        })
        if (handleErrors(answers)) return
        answers = await answers.json()

        let assignmentDetails = await fetch(`/api/assignments/${AssignmentID}`, {
            method: "GET", 
            credentials: "include"
        })
        if (handleErrors(assignmentDetails)) return
        assignmentDetails = await assignmentDetails.json()

        if (answers.success && assignmentDetails.success) {
            return {
                "AssignmentDetails": assignmentDetails.data,
                "Answers": answers.data
            }
        }
    } catch (error) {
        console.log("Fetch error: ", error)
    }
}

export {viewSubmissionLoader}
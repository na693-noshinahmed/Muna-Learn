import { handleErrors } from "../../../errors/handleErrors"

async function assignmentsTeacherViewLoader({params}) {
    try {
        const {AssignmentID} = params
        let response = await fetch(`/api/assignments/${AssignmentID}/AssignmentTeacherView`, {
        method: "GET",
        credentials: "include",
        })
        if (handleErrors(response)) return
        response = await response.json()
        if (response.success) return response.data
    } catch (error) {
        console.log("Fetch error: ", error)
    }
}

export {assignmentsTeacherViewLoader}
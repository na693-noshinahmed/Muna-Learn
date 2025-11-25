import { handleErrors } from "../../../errors/handleErrors"

async function viewGradesAction({request}) {
    try {
        let formData = await request.formData()
        formData = Object.fromEntries(formData)
        const {assignment, student} = formData

        let requestURL = "/api/grades/filter?"
        if (assignment==="" && student ==="") {
            return
        }
        if (assignment !== "") {
            requestURL += "AssignmentID=" + assignment
        }
        if (assignment !== "" && student !== "") {
            requestURL += "&"
        }
        if (student !== "") {
            requestURL += "UserID=" + student
        }
        let response = await fetch(requestURL, {
            method: "GET",
            credentials: "include",
        })
        if (handleErrors(response)) return
        response = await response.json()
        if (response.success) {
            return response.data
        }
    } catch (error) {
        console.log("Fetch error " + error)
    }
}

export {viewGradesAction}
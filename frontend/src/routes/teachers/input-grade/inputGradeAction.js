import { handleErrors } from "../../../errors/handleErrors"
async function inputGradeAction({request}) {
    let formData = await request.formData()
    formData = Object.fromEntries(formData)

    const {UserID, AssignmentID, AssignmentGrade} = formData

    const body = {UserID, AssignmentID, AssignmentGrade}

    const jsonBody = JSON.stringify(body)
    try {
        let response = await fetch("/api/grades", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: jsonBody
        })
        if (handleErrors(response)) return
        response = response.json()
        return response
    } catch (error) {
        console.log("Fetch error ", error)
    }
}

export {inputGradeAction}
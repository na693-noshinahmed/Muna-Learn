import { handleErrors } from "../../../errors/handleErrors"
async function updateGradeAction({request}) {
    try {
        const path = request.url
        const GradeID = path.split("/")[path.split("/").length - 1]
        let formData = await request.formData()
        formData = Object.fromEntries(formData)
        const jsonBody = JSON.stringify(formData)

        let response = await fetch(`/api/grades/${GradeID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: jsonBody
        })
        if (handleErrors(response)) return
        response = await response.json()
        return response
    } catch (error) {
        console.log("Fetch Error: " + error)
    }
}

export {updateGradeAction}
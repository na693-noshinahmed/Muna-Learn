import { handleErrors } from "../../../errors/handleErrors"
async function getAssignmentsLoader() {
    try {
        let response = await fetch('/api/assignments', {
        method: "GET",
        credentials: "include"
        })
        if(handleErrors(response)) return
        response = await response.json()

        if (response.success) return response.data
    } catch (error) {
        console.log("Fetch error: ", error)
    }
}

export {getAssignmentsLoader}
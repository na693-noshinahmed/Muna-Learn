import { handleErrors } from "../../../errors/handleErrors"
async function DeleteAssignmentAction({params}) {
    const {AssignmentID} = params

    try {
        let response = await fetch(`/api/assignments/${AssignmentID}`, {
            method: "DELETE",
            credentials: "include",
        })
        if (handleErrors(response)) return
        response = await response.json()
        return response
    } catch (error){
        console.log("Fetch error: ", error)
    }
}

export { DeleteAssignmentAction }
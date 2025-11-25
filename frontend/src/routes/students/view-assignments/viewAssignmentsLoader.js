import { handleErrors } from "../../../errors/handleErrors"

async function viewAssignmentsLoader() {
    try {
        let response = await fetch("/api/assignments", {
            method: "GET",
            credentials: "include"
        })
        if (handleErrors(response)) return
        response = await response.json()

        let data = response.data
        if (response.success) {
            for (let assignment = 0; assignment < data.length; assignment++) {
                let isSubmittedResponse = await fetch(`/api/answers?AssignmentID=${data[assignment].AssignmentID}`, {
                    method: "GET",
                    credentials: "include"
                })
                isSubmittedResponse = await isSubmittedResponse.json()
                if (isSubmittedResponse.data.length === 0) {
                    data[assignment] = {...data[assignment], "isSubmitted": false}
                } else {
                    data[assignment] = {...data[assignment], "isSubmitted": true}
                }
            }
            return data
        }
    } catch (error){
        console.log("Fetch error: ", error)
    }
}

export {viewAssignmentsLoader}
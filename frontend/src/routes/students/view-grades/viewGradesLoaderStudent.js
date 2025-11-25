import { handleErrors } from "../../../errors/handleErrors"

async function viewGradesLoaderStudent() {
    try {
        let response = await fetch("/api/grades/filter", {
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

export {viewGradesLoaderStudent}
import { handleErrors } from "../../../errors/handleErrors"

async function viewGradesLoader() {
    try {
        let assignments = await fetch('/api/assignments', {
            method: "GET",
            credentials: "include",
        })
        if (handleErrors(assignments)) return
        assignments = await assignments.json()

        let students = await fetch('/api/users/students', {
            method: "GET",
            credentials: "include",
        })
        if (handleErrors(students)) return
        students = await students.json()

        if (assignments.success && students.success) {
            return {"Assignments": assignments.data, "Students": students.data}
        }
    } catch (error){
        console.log("Fetch Error:", error)
    }
}

export { viewGradesLoader }
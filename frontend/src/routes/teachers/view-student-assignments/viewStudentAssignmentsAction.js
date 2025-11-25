import { handleErrors } from "../../../errors/handleErrors"

async function viewStudentAssignmentsAction({request}) {
    try {
        let formData = await request.formData()
        formData = Object.fromEntries(formData)
        const {AssignmentID, UserID} = formData
        const requestURLForAssignment = `/api/answers?UserID=${UserID}&AssignmentID=${AssignmentID}`

        let submission = await fetch(requestURLForAssignment, {
            method: "GET",
            credentials: "include",
        })
        if (handleErrors(submission)) return
        submission = await submission.json()


        const requestURLForGrade = `api/grades/filter?UserID=${UserID}&AssignmentID=${AssignmentID}`

        let grade = await fetch(requestURLForGrade, {
            method: "GET",
            credentials: "include",
        })
        if (handleErrors(grade)) return 
        grade = await grade.json()
        
        if (submission.success && grade.success) {
            let response = {"Submission": submission.data}
            if (grade.data.length === 1) {
                response ={...response, "Grade": {
                    "GradeID":grade.data[0].GradeID,
                    "Grade":grade.data[0].Grade,
                }}
            }
            return response
        }
    }
    catch (error) {
        console.log("Fetch Error: ", error)
    }
}

export {viewStudentAssignmentsAction}

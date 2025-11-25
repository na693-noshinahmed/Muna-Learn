import { useLoaderData } from "react-router-dom"
import Button from "../../../components/Button.jsx"

export default function ViewAssignments() {
    const result = useLoaderData()
    let assignmentsFormatted
    assignmentsFormatted = result.map((assignment) => {
        return (
            <section key={assignment.AssignmentID} className="assignment">
                <h3>Assignment Name: {assignment.AssignmentName}</h3>
                <p>Number of Questions: {assignment.NumberQuestions}</p>
                <p>Instructions: {assignment.Instructions}</p>
                <div>
                {assignment.isSubmitted ? 
                    <Button urlSegment="update-submission" id={assignment.AssignmentID} view="Update Submission"/>
                :   <Button urlSegment="create-submission" id={assignment.AssignmentID} view="Create Submission"/>
                }
                </div>
            </section>
        )
    })
    return (
        <>
        <h2>View Assignments</h2>
        {result ? assignmentsFormatted: null}
        </>
    )
}
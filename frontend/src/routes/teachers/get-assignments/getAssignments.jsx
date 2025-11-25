import { useLoaderData } from "react-router-dom"
import {useState} from "react"

import Button from "../../../components/Button.jsx"
import DeleteButton from "../../../components/DeleteButton.jsx"

function GetAssignmentsComponent() {
    const assignments = useLoaderData()

    const [selectedForDelete, setSelectedForDelete] = useState(null)

    let assignmentsFormatted
    if (assignments.length !== 0) {
        assignmentsFormatted = assignments.map(assignment => {
        return (
            <section key={assignment.AssignmentID} className="assignment">
            <h3>{assignment.AssignmentName}</h3>
            <p>Number of Questions: {assignment.NumberQuestions}</p>
            <p>Instructions: {assignment.Instructions}</p>
            <div>
            <Button id={assignment.AssignmentID} view="View Assignment" urlSegment="view-assignment"/>
            <Button id={assignment.AssignmentID} view="Edit Assignment" urlSegment="edit-assignment"/>
            <DeleteButton id={assignment.AssignmentID} click={() => handleClick(assignment.AssignmentID)} view={"Delete Assignment"} urlSegment="delete-assignment" selected={selectedForDelete === assignment.AssignmentID}/>
            </div>
            </section>
        )
    })
    } else {
        assignmentsFormatted = (<p>No Assignments Yet</p>)
    }

    function handleClick(AssignmentID) {
        const userConfirmed = confirm("Are you sure you want to delete this assignment?")
        if (!userConfirmed) {
            return
        }
        setSelectedForDelete(AssignmentID)
    }

    return (
        <>
        <h2>Assignments</h2>
        {assignmentsFormatted}
        </>
    )
}

export {GetAssignmentsComponent}
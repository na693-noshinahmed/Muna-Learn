import { useLoaderData, Form, useActionData } from "react-router-dom"
import {useState, useRef, useEffect} from "react"
import Grade from "./Grade.jsx"

export default function ViewGrades() {
    const formRef= useRef()
    const data = useLoaderData()
    const result = useActionData()

    const [assignment, setAssignment] = useState("")
    const [student, setStudent] = useState("")
    
    const assignmentOptionElements = data.Assignments.map((assignment) => {
        return <option key={assignment.AssignmentID} value={assignment.AssignmentID}>{assignment.AssignmentName}</option>
    })
    const studentOptionElements = data.Students.map((student) => {
        return <option key={student.UserID} value={student.UserID}>{`${student.FirstName} ${student.LastName}`}</option>
    })

    function handleChangeAssignment(event) {
        setAssignment(event.target.value)
    }
    function handleChangeStudent(event) {
        setStudent(event.target.value)
    }

    useEffect(() => {
        if (student !== "" || assignment !== "") {
            formRef.current.requestSubmit()
        }
    }, [assignment, student])

    let gradesFormatted
    if (result && result.length !== 0) {
        gradesFormatted = result.map(grade => <Grade key={grade.GradeID} grade={grade}/>)
    } else if (result) {
        gradesFormatted = (<p>No Grades Found</p>)
    }

    return (
        <>
            <div style={{display:"grid", placeItems:"center"}}>
            <h2>View Grades</h2>
            <Form method="post" ref={formRef} className="view-grades-form">
            <select name="student" value={student} onChange={handleChangeStudent}>
                <option value="">Select a Student</option>
                {studentOptionElements}
            </select>
            <select name="assignment" value={assignment} onChange={handleChangeAssignment}>
                <option value="">Select an Assignment</option>
                {assignmentOptionElements}
            </select>
            </Form>
            </div>
            {gradesFormatted}
        </>
    )
}
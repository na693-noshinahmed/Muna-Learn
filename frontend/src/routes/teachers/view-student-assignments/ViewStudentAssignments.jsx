import {useLoaderData, useFetcher, Form, useActionData, useOutletContext} from "react-router-dom"
import {useState, useRef, Fragment, useEffect} from "react"

export default function ViewStudentAssignments() {
    const fetcher = useFetcher()
    const data = useLoaderData()
    const formRef = useRef()
    const result = useActionData()
    const {notify} = useOutletContext()
     
    const [assignment, setAssignment] = useState("")
    const [student, setStudent] = useState("")

    useEffect(() => {
        if (assignment && student) {
            formRef.current.requestSubmit()
        }
    }, [student, assignment])

    useEffect(() => {
        if (fetcher.data) {
            notify(fetcher.data.message)
        }
    }, [fetcher.data])

    const assignmentOptionElements = data.Assignments.map((assignment) => {
        return <option key={assignment.AssignmentID} value={assignment.AssignmentID}>{assignment.AssignmentName}</option>
    })

    const studentLinkElements = data.Students.map(({UserID, FirstName, LastName}) => {
        return (
        <Fragment key={UserID}>
            <button 
            style={{width: "auto", height:"auto", padding:"5px"}}
            className={student === UserID ? "isSelected": "isNotSelected"}
            onClick={() => setStudent(UserID)}
            >
                {`${FirstName} ${LastName}`}
            </button>
            <br></br>
        </Fragment> )
    })

    let assignmentFormatted
    if (result && result.Submission !== 0) {
        assignmentFormatted = result.Submission.map((answer, index) => {
            return (
                <section key={index} className="no-form-info">
                    <h4>{`${index + 1} ${answer.Question}`}</h4>
                    <p>Correct Answer: {answer.CorrectAnswer}</p>
                    <p>Student Answer: {answer.Answer}</p>
                </section>
            )
        })
    }

    return (
    <>
        <Form method="post" ref={formRef} className="student-assignment">
            <h2>Submissions</h2>
            <select name="AssignmentID" value={assignment} onChange={(event) => setAssignment(event.target.value)}>
                <option value="">Select Assignment</option>
                {assignmentOptionElements}
            </select>
            <br></br>
            <div className="student-list">
                <div>
                    <input type="hidden" name="UserID" value={student}/>
                    {studentLinkElements}
                </div>
                <div>
                    {(result && result.Submission.length !== 0) ? assignmentFormatted: "No Submission Found"}
                </div>
            </div>
        </Form>

        {result ? (result?.Grade ? 
            <fetcher.Form method="post" action={`/update-grade/${result.Grade.GradeID}`} key={`update-grade-form-${result.Grade.GradeID}`}>

                <label htmlFor="Grade">Grade: </label>
                <input type="number" name="Grade" id="Grade" defaultValue={result.Grade.Grade} required/>
                
                <button type="submit">{fetcher.state === "submitting" ? "Updating..." : "Update Grade"}</button>
            </fetcher.Form>
            :
            <fetcher.Form method="post" action="/input-grade" key={`input-grade-form-${result.Grade.GradeID}`} >
                <input type="hidden" name="UserID" value={student} />
                <input type="hidden" name="AssignmentID" value={assignment}/>

                <label htmlFor="AssignmentGrade">Grade: </label>
                <input type="number" name="AssignmentGrade" id="AssignmentGrade" required/>
                
                <button type="submit">{fetcher.state === "submitting" ? "Inputting..." : "Input Grade"}</button>
            </fetcher.Form>)
        : null}
    </>
    )
}
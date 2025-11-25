import { useLoaderData, Link, useNavigation } from "react-router-dom"

export default function ViewGrades() {
    const result = useLoaderData()
    const navigation = useNavigation()

    const gradesFormatted = result.map((grade) => {
        return (
            <section key={grade.GradeID} className="grade">
            <div style={{display:"grid", gap:"10px"}}>
            <h3>Assignment Name: {grade.AssignmentName}</h3>
            <Link to={`/view-submission/${grade.AssignmentID}`}>
                <button>{navigation.state === "submitting" ? "Loading" : "View Submission"}</button>
            </Link>
            </div>
            <p>Grade: {grade.Grade}</p>
            </section>
        )
    })
    return (
        <>
            <h2>Grades</h2>
            {gradesFormatted}
        </>
    )
}
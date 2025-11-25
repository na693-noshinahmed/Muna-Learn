import {Form, useLoaderData, useNavigation, useOutletContext, useActionData, useNavigate} 
    from "react-router-dom"
import { useEffect } from "react"

export default function CreateSubmission() {
    const {notify} = useOutletContext()
    const result = useActionData()
    const navigation = useNavigation()
    const navigate = useNavigate()
    const {AssignmentDetails, Questions} = useLoaderData()

    useEffect(() => {
        if (result) {
            notify(result.message)
            if (result.success) {
                setTimeout(() => {
                    navigate("/view-assignments")
                }, 1000)
            }
        }
    }, [result])

    let questionsFormatted
    if (Questions) {
        questionsFormatted = Questions.map((question, index) => {
            return (
                <section key={question.QuestionID} className="form-info">
                    <input type="hidden" name={`Question[${index}].QuestionID`} defaultValue={question.QuestionID}/>
                    <label htmlFor={`Question[${index}].Answer`}>{`${index + 1}. ${question.Question}`}</label>
                    <textarea id={`Question[${index}]`} name={`Question[${index}].Answer`} required/>
                </section>
            )
        })
    }
    return (
        <Form method="post">
            <h4>Assignment Name: {AssignmentDetails.AssignmentName}</h4>
            <p> Instructions: {AssignmentDetails.Instructions}</p>
            {questionsFormatted}
            <button type="submit">{navigation.state === "submitting" ? "Submitting..." : "Submit"}</button>
        </Form>
    )
}
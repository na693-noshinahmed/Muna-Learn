import {useLoaderData, Form, useNavigation, useOutletContext, useActionData, useNavigate} from "react-router-dom"
import { useEffect } from "react"

export default function UpdateSubmission(){
    const {AssignmentDetails, Answers} = useLoaderData()
    const navigation = useNavigation()
    const {notify} = useOutletContext()
    const result = useActionData()
    const navigate = useNavigate()

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

    const questionsFormatted = Answers.map((question, index) => {
        return <section key={question.AnswerID} className="form-info">
            <h4>{`${index + 1}. ${question.Question}`}</h4>
            <input type="hidden" name={`Answer[${index}].AnswerID`} defaultValue={question.AnswerID}/>
            <textarea id={`Answer[${index}].Answer`} name={`Answer[${index}].Answer`} defaultValue={question.Answer} required/>
        </section>
    })
    return (
        <Form method="post">
            <h4>{AssignmentDetails[0].AssignmentName}</h4>
            <p>{AssignmentDetails[0].Instructions}</p>
            {questionsFormatted}
            <button>{navigation.state === "submitting" ? "Updating..." : "Update Submission"}</button>
        </Form>
    )
}
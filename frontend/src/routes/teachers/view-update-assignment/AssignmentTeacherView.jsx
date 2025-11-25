import {useLoaderData, useLocation, Form, useNavigation, 
    useNavigate, useActionData, useOutletContext} from "react-router-dom"
import { useEffect } from "react"

export default function AssignmentTeacherView() {
    const {notify} = useOutletContext()
    const navigation = useNavigation()
    const navigate = useNavigate()
    const result = useActionData()

    const {pathname} = useLocation();
    const page = pathname.split("/")[1]

    const {AssignmentDetails, Questions} = useLoaderData()

    useEffect(() => {
        if (result) {
            notify(result.message) 
            if (result.success) {
                setTimeout(() => {
                    navigate(`/view-assignment/${AssignmentDetails.AssignmentID}`)
                }, 1000)
            }
        }
    }, [notify, result])


    const formattedQuestions = Questions.map((question, index) => {
        if (page === "view-assignment") {
            return (
            <section key={question.QuestionID} className="no-form-info">
                <h3>{index+1}. {question.Question}</h3>
                <p>Correct Answer: {question.CorrectAnswer}</p>
            </section>
            )
        } else if (page === "edit-assignment"){
            return (
            <section key={question.QuestionID} className="form-info">
                <input type="hidden" name={`Question[${index}].QuestionID`} value={question.QuestionID}/>
                <label htmlFor={`Question[${index}].Question`}>{index+1}.</label>
                <textarea id={`Question[${index}].Question`} name={`Question[${index}].Question`} defaultValue={question.Question} maxLength="256" required />
                <label htmlFor={`Question[${index}].CorrectAnswer`}>CorrectAnswer: </label>
                <textarea id={`Question[${index}].CorrectAnswer`} name={`Question[${index}].CorrectAnswer`} defaultValue={question.CorrectAnswer} maxLength="256" required/>
            </section>
            )
        }
    })

    return (
        <Form method="post">
            {page==="view-assignment"? <h2 className="no-form-info">Assignment Name: {AssignmentDetails.AssignmentName}</h2>: 
            <><label htmlFor="AssignmentName" className="form-info">Assignment Name:
            <textarea id="AssignmentName" name="AssignmentName" defaultValue={AssignmentDetails.AssignmentName} maxLength="100" required/>
            </label></>}

            {page==="view-assignment"? <p className="no-form-info">Number of Questions: {AssignmentDetails.NumberQuestions}</p>: 
            <><label htmlFor="NumberQuestions"  className="form-info">Number of Questions:
            <input id="NumberQuestions" name="NumberQuestions" style={{cursor:"not-allowed"}} readOnly defaultValue={AssignmentDetails.NumberQuestions} />
            </label></>}

            {page==="view-assignment"? <p className="no-form-info">Instructions: {AssignmentDetails.Instructions}</p>: 
            <><label htmlFor="Instructions" className="form-info">Instructions:
            <textarea id="Instructions" name="Instructions" defaultValue={AssignmentDetails.Instructions} maxLength="256" required/>
            </label></>}
    
            {formattedQuestions}

            {page==="edit-assignment" ? 
            <button  type="submit">{navigation.state === "submitting" ? "Updating..." : "Update Assignment"}</button> 
            : null}
        </Form>
    )
}

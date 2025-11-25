import { Form, useNavigation, useActionData, useNavigate } from "react-router-dom"
import {useState, useEffect} from "react"
import { useOutletContext } from "react-router-dom"

export default function CreateAssignment() {
    const {notify} = useOutletContext()
    const result = useActionData()
    const navigation = useNavigation()
    const navigate = useNavigate()
    const [numberOfQuestions, setNumberOfQuestions] = useState(0)
    const [questionsData, setQuestionsData] = useState([])

    useEffect(() => {
        if (result) {
            notify(result.message)
            if (result.success) {
                setTimeout(() => {
                    navigate("/assignments")
                }, 1000)
            }
        }
    }, [notify, result])

    function handleChange(event) {
        let questionsWanted = event.target.value
        if (questionsWanted === '') return
        questionsWanted = Number(questionsWanted)
        const currentNumber = Number(numberOfQuestions)

        if(questionsWanted < currentNumber) {
            const userConfirmed = confirm("Are you sure you want to delete questions?")
            if (!userConfirmed) {
                return
            }
        }
        setNumberOfQuestions(questionsWanted)

        setQuestionsData(Array.from(
            {length:questionsWanted}, (question, index) => {
                return questionsData[index] || {Question:"", CorrectAnswer:""}
            }
        ))
    }

    const questionElements = questionsData.map((question, index) => {
            return (
            <section key={index}>
                <label htmlFor={`Question[${index}].Question`} className="form-info">Question {index + 1}:
                <textarea id={`Question[${index}].Question`} name={`Question[${index}].Question`} maxLength="255" required/>
                </label>

                <label htmlFor={`Question[${index}].CorrectAnswer`} className="form-info">Correct Answer:
                <textarea id={`Question[${index}].CorrectAnswer`} name={`Question[${index}].CorrectAnswer`} maxLength="255" required/>
                </label>
            </section>
            )
    })
 
    return (
        <Form method="post">
            <h2>Create Assignment</h2>
            <section className="assignment-details">
            <label htmlFor="AssignmentName" className="form-info">Assignment Name:
            <textarea id="AssignmentName" name="AssignmentName" maxLength="100" required/>
            </label>

            <label htmlFor="NumberQuestions" className="form-info">Number Questions:
            <input onChange={handleChange} id="NumberQuestions" name="NumberQuestions" type="number" min="1" required/>
            </label>

            <label htmlFor="Instructions" className="form-info">Instructions:
            <textarea id="Instructions" name="Instructions" maxLength="256" required/>
            </label>
            </section>

            <br></br>
            {questionElements}
            <button type="submit" disabled={navigation.state === "submitting"}>
                {navigation.state === "submitting" ? "Creating...":"Create Assignment"}
            </button>
        </Form>
    )
}
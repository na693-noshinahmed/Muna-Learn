import { useLoaderData } from "react-router-dom"
export default function ViewSubmission() {
    const {AssignmentDetails, Answers} = useLoaderData()
    const questionsFormatted = Answers.map((question, index) => {
        return <section key={question.AnswerID} className="no-form-info">
            <h4>{`${index + 1}. ${question.Question}`}</h4>
            <p>Answer: {question.Answer}</p>
        </section>
    })
    return (
       <>
            <h4>Assignment Name: {AssignmentDetails[0].AssignmentName}</h4>
            <p>Instructions: {AssignmentDetails[0].Instructions}</p>
            {questionsFormatted}
       </> 
    )
}
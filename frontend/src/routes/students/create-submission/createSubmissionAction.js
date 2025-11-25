import { redirect } from "react-router-dom"
import { handleErrors } from "../../../errors/handleErrors"

async function createSubmissionAction({request}) {
    try {
        let formData = await request.formData()
        formData = Object.fromEntries(formData)
        let body = {"Answers": []}

        for (let question = 0; question < Object.keys(formData).length / 2; question++) {
            body.Answers = [...body.Answers, 
                {"QuestionID": formData[`Question[${question}].QuestionID`], 
                "Answer": formData[`Question[${question}].Answer`]}]
        }
        const jsonBody = JSON.stringify(body)

        let response = await fetch("/api/answers", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: jsonBody
        })
        if (handleErrors(response)) return
        response = await response.json()

        return response
    } catch (error){
        console.log("Fetch error: ", error)
    }
}

export {createSubmissionAction}
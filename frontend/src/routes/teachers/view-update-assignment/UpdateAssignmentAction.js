import {redirect} from "react-router-dom"
import { handleErrors } from "../../../errors/handleErrors"

async function updateAssignmentAction({request}) {
    const path = window.location.href
    const AssignmentID = path.split("/")[path.split("/").length - 1]

    let formData = await request.formData()
    formData = Object.fromEntries(formData)
    const {AssignmentName, NumberQuestions, Instructions} = formData
    const requestBody = {
        "AssignmentDetails": {
            "AssignmentName": AssignmentName,
            "NumberQuestions": NumberQuestions,
            "Instructions": Instructions
        },
        "Questions": [

        ]
    }
    const numQuestions = parseInt(NumberQuestions, 10)
    for (let i=0; i < numQuestions; i++) {
        let questionId = formData[`Question[${i}].QuestionID`]
        let question = formData[`Question[${i}].Question`]
        let answer = formData[`Question[${i}].CorrectAnswer`]
            requestBody.Questions = [...requestBody.Questions, {
                "QuestionID": questionId,
                "Question": question,
                "CorrectAnswer": answer
            }]
    }

    const jsonBody = JSON.stringify(requestBody)

    try {
        let response = await fetch(`/api/assignments/${AssignmentID}`, {
            method: "PUT",
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

export {updateAssignmentAction}
import {redirect} from "react-router-dom"
import { handleErrors } from "../../../errors/handleErrors"

async function createAssignmentAction({request}){
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
        let question = formData[`Question[${i}].Question`]
        let answer = formData[`Question[${i}].CorrectAnswer`]
        requestBody.Questions = [...requestBody.Questions, {
            "Question": question,
            "CorrectAnswer": answer
        }]
    }

    const jsonBody = JSON.stringify(requestBody)

    try {
        let response = await fetch(`/api/assignments/`, {
            method: "POST",
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

export {createAssignmentAction}
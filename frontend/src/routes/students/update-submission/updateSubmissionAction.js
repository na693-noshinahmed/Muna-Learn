import { handleErrors } from "../../../errors/handleErrors"

async function updateSubmissionAction({request}){
    try {
        let formData = await request.formData()
        formData = Object.fromEntries(formData)
        let body = {"Answers": []}

        for (let question = 0; question < Object.keys(formData).length / 2; question++) {
            body.Answers = [...body.Answers, 
                {"AnswerID": formData[`Answer[${question}].AnswerID`], 
                "Answer": formData[`Answer[${question}].Answer`]}]
        }
        const jsonBody = JSON.stringify(body)

        let response = await fetch("/api/answers", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: jsonBody
        })
        if(handleErrors(response)) return
        response = await response.json()
        return response
    } catch (error) {
        console.log("Fetch error: ", error)
    }
}

export {updateSubmissionAction}
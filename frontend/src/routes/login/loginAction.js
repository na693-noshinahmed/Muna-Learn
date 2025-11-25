async function loginAction({request}){
    try {
        let formData = await request.formData()
        formData = Object.fromEntries(formData)

        const jsonBody = JSON.stringify(formData)
        
        let response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonBody
        })

        response = await response.json()
        if (response.success) {
            return response.role
        } else {
            return "Login Information is Incorrect"
        }
    } catch (error) {
        console.log("Fetch Error: ", error)
    }
}

export {loginAction}
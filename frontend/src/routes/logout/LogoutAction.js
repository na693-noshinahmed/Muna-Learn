async function logoutAction() {
    try {
        let response = await fetch("/api/logout", {
            method: "POST"
        })

        response = await response.json()
        if (response.success) {
            window.location.href = '/login'
        }
    } catch (error){

    }
}

export {logoutAction}
function handleErrors(response) {
    if (response.status === 401) {
        window.location.href = "/error-401"
        return true 
    }

    if (response.status === 403) {
        window.location.href = "/error-403"
        return true
    }
    return false
}

export {handleErrors}
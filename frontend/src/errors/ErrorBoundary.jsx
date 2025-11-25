import { useNavigate } from "react-router-dom"

function fallbackRender({ error}) {

    function handleClick() {
        const navigate = useNavigate()
        navigate("/")
    }
    return (
        <div>
            <h2>Something went wrong:</h2>
            <p>{error.message}</p>
            <button onClick={handleClick}>Home</button>
        </div>
    )
}

export {fallbackRender}
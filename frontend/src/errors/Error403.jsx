import {Link} from "react-router-dom"

export default function Error403(){
    return (
        <section className="error">
            <h3>You are not authorized to access this resource</h3>
            <Link to="/">
                <button>Home</button>
            </Link>
        </section>
    )
}
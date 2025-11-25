import { Link } from "react-router-dom"

export default function Error401() {
    return (
        <section className="error">
            <h3>Please log in to access this page</h3>
            <Link to="/login">
                <button>Log in</button>
            </Link>
        </section>
    )
}
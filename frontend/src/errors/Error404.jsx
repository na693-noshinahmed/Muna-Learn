import { Link } from "react-router-dom"

export default function Error404() {
    return (
        <section className="error">
            <h3>404: Page not found</h3>
            <Link to="/">
            <button>Home</button>
            </Link>
        </section>
    )
}
import { Link } from "react-router-dom"

export default function Button(props) {
    return (
    <Link to={`/${props.urlSegment}/${props.id}`}>
        <button>{props.view}</button>
    </Link>
    )
}
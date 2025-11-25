import { Form } from "react-router"
function LogoutButton() {
    return (
        <Form method="post" action="/logout" style={{}}>
            <button type="submit">Logout</button>
        </Form>
    )
}

export default LogoutButton
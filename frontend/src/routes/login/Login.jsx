import {Form, useActionData, useNavigation} from "react-router-dom"
import { RoleContext } from "../../RoleProvider"
import { useContext, useEffect } from "react"

export default function LoginPage() {
    const navigation = useNavigation()
    const result = useActionData()
    const {setRole} = useContext(RoleContext)

    useEffect(() => {
        if (result !== undefined) {
            setRole(result)
        }
    }, [result, setRole])
    return (
        <Form method="post" className="login">
            <h2>Login</h2>
            <label htmlFor="Username" className="login-form">Username: 
            <input id="Username" name="Username"/>
            </label>

            <label htmlFor="Password" className="login-form">Password:
            <input id="Password" name="Password" type="password"/>
            </label>
                
            <button type="submit">{navigation.state==="submitting" ? "Logging in..." : "Login"}</button>
        </Form>
    )
}
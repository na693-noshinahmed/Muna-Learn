import LogoutButton from "../routes/logout/Logout"
import { useLocation } from "react-router"

export default function Header() {
    const {pathname} = useLocation();
    const page = pathname.split("/")[1]
    let showLogoutButton = true
    if (page==="login") {
        showLogoutButton = false
    }
    return (
    <header>
        <div>
        <img src="/src/images/MUNA-logo.jpg" height="50px"/>
        <span>MUNA Learn</span>
        </div>
        {showLogoutButton ? <LogoutButton /> : null}
    </header>
    )
}
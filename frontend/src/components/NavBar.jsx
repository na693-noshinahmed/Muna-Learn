import { NavLink } from "react-router-dom"
import {useState} from "react"

export default function NavBar(props) {
    const {links} = props
    const [selectedLink, setSelectedLink] = useState(false)

    function handleClick(name) {
        setSelectedLink(name)
    }

    const linksFormatted = links.map(link => {
        return (<NavLink 
            key={link.path}
            onClick={() => handleClick(link.name)} 
            className={selectedLink === link.name ? "isSelected" : "isNotSelected"} 
            to={link.path} 
            style={{padding:"10px"}} end>
                {link.name}
            </NavLink>)
    })
    return (
        <nav>
            {linksFormatted}
        </nav>
    )
}
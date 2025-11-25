import {createContext, useState, useEffect} from "react"

const RoleContext = createContext()

function RoleProvider({children}) {
    const [role, setRole] = useState(undefined)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function checkForToken() {
            try {
                let response = await fetch("/api/users/cookie", {
                method: "GET",
                credentials: "include"
                })
                response = await response.json()

                if (response.success) {
                    setRole(response.Role)
                } else {
                    setRole(null)
                }
            } catch (error) {
                console.log("Fetch Error: ", error)
                setRole(null)
            } finally {
                setLoading(false)
            }
        }
        checkForToken()
    }, [])
    
    return (
        <RoleContext.Provider value={{ role, setRole, loading }}>
        {children}
        </RoleContext.Provider>
    );
}

export {RoleContext, RoleProvider}
import studentRouteObject from "./routes/students/router.jsx"
import teacherRouteObject from "./routes/teachers/router.jsx"
import loginRouteObject from "./routes/login/loginRouteObject.jsx"
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom"
import {useContext} from "react"
import { RoleContext } from "./RoleProvider.jsx"
import Error401 from "./errors/Error401.jsx"
import Error403 from "./errors/Error403.jsx"
import Error404 from "./errors/Error404.jsx"

function DecideRoute() {
    const {role, loading} = useContext(RoleContext)
    if (loading) {
        return
    }
    let routeObject
    if (role === "student") {
        routeObject = studentRouteObject
    } else if (role === "teacher") {
        routeObject = teacherRouteObject
    } else {
        routeObject = loginRouteObject
    }

    const router = createBrowserRouter([routeObject, 
        {
            path: "error-401",
            element: <Error401/>
        },
        {
            path: "error-403",
            element: <Error403 />
        },
        {
            path: "*",
            element: <Error404/>
        }
    ])
    return <RouterProvider router={router} />

}

export {DecideRoute}
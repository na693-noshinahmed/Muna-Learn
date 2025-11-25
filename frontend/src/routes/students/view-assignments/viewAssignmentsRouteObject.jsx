import {viewAssignmentsLoader} from "./ViewAssignmentsLoader.js"
import ViewAssignments from "./ViewAssignments.jsx"

const viewAssignmentsRouteObject = {
    path: "view-assignments",
    element: <ViewAssignments />,
    loader: viewAssignmentsLoader
}

export {viewAssignmentsRouteObject}
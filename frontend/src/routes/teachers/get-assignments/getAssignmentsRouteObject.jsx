import { GetAssignmentsComponent } from "./getAssignments.jsx";
import { getAssignmentsLoader } from "./getAssignmentsLoader.js";

const getAssignmentRouteObject = {
    path: "assignments",
    element: <GetAssignmentsComponent/>,
    loader: getAssignmentsLoader
}

export {getAssignmentRouteObject}
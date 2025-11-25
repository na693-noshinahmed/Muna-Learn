import CreateAssignment from "./createAssignment.jsx";
import { createAssignmentAction } from "./createAssignmentAction.js";

const createAssignmentRouteObject = {
    path: "create-assignment",
    element: <CreateAssignment />,
    action: createAssignmentAction
}

export {createAssignmentRouteObject}
import ViewStudentAssignments from "./ViewStudentAssignments";
import {viewStudentAssignmentsLoader} from "./viewStudentAssignmentsLoader.js"
import { viewStudentAssignmentsAction } from "./viewStudentAssignmentsAction.js";

const viewStudentAssignmentsRouteObject = {
    path: "view-student-assignments",
    element: <ViewStudentAssignments/>,
    loader: viewStudentAssignmentsLoader,
    action: viewStudentAssignmentsAction
}

export {viewStudentAssignmentsRouteObject}
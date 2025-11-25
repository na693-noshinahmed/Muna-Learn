import { assignmentsTeacherViewLoader } from "./AssignmentLoader";
import AssignmentTeacherView from "./AssignmentTeacherView";
import { updateAssignmentAction } from "./UpdateAssignmentAction";

const viewAssignmentTeacherViewRouteObject = {
    path: "view-assignment/:AssignmentID",
    element: <AssignmentTeacherView />,
    loader: assignmentsTeacherViewLoader
}

const editAssignmentTeacherViewRouteObject = {
    path: "edit-assignment/:AssignmentID",
    element: <AssignmentTeacherView />,
    loader: assignmentsTeacherViewLoader,
    action: updateAssignmentAction
}

export {viewAssignmentTeacherViewRouteObject, editAssignmentTeacherViewRouteObject}
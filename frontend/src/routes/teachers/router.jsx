import App from "../../App.jsx"
import {Navigate} from "react-router-dom"
import { getAssignmentRouteObject } from "./get-assignments/getAssignmentsRouteObject.jsx";
import { viewAssignmentTeacherViewRouteObject, editAssignmentTeacherViewRouteObject } from "./view-update-assignment/AssignmentRouteObject.jsx";
import { deleteAssignmentRouteObject } from "./delete-assignment/DeleteAssignmentRouteObject.jsx";
import { createAssignmentRouteObject } from "./create-assignment/createAssignmentRouteObject.jsx";
import { viewGradesRouteObject } from "./view-grades/viewGradesRouteObject.jsx";
import { updateGradeRouteObject } from "./update-grade/updateGradeRouteObject.jsx";
import {viewStudentAssignmentsRouteObject} from "./view-student-assignments/viewStudentAssignmentsRouteObject.jsx"
import { inputGradeRouteObject } from "./input-grade/inputGradeRouteObject.jsx";
import HomePage from "../home-page/HomePage.jsx"
import { logoutRouteObject } from "../logout/LogoutRouteObject.jsx";

const router = {
    path: "/",
    element: <App />,
    children: [
      {
        path: "teacher",
        element: <HomePage />
      },
      getAssignmentRouteObject,
      viewAssignmentTeacherViewRouteObject,
      editAssignmentTeacherViewRouteObject,
      deleteAssignmentRouteObject,
      createAssignmentRouteObject,
      viewGradesRouteObject,
      updateGradeRouteObject,
      viewStudentAssignmentsRouteObject,
      inputGradeRouteObject,
      logoutRouteObject,
      {
        path: "/login",
        element: <Navigate to="/teacher" replace />
      }
    ]
  }

export default router
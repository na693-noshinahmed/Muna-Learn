import App from "../../App.jsx"
import {Navigate} from "react-router-dom"
import { viewAssignmentsRouteObject } from "./view-assignments/viewAssignmentsRouteObject.jsx";
import { createSubmissionRouteObject } from "./create-submission/createSubmissionRouteObject.jsx";
import { updateSubmissionRouteObject } from "./update-submission/updateSubmissionRouteObject.jsx";
import { viewGradesRouteObject } from "./view-grades/ViewGradesRouteObject.jsx";
import { viewSubmissionRouteObject } from "./view-submission/viewSubmissionRouteObject.jsx";
import HomePage from "../home-page/HomePage.jsx"
import { logoutRouteObject } from "../logout/LogoutRouteObject.jsx";

const router = {
    path: "/",
    element: <App />,
    children: [
      {
        path: "student",
        element: <HomePage />
      },
      viewAssignmentsRouteObject,
      createSubmissionRouteObject,
      updateSubmissionRouteObject,
      viewGradesRouteObject,
      viewSubmissionRouteObject,
      logoutRouteObject,
      {
      path: "/login",
      element: <Navigate to="/student" replace />
      }
    ]
  }

export default router
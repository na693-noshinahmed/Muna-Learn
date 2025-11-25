import ViewGrades from "./ViewGrades.jsx"
import { viewGradesLoader } from "./viewGradesLoader.js"
import { viewGradesAction } from "./viewGradesAction.js"

const viewGradesRouteObject = {
    path: "view-grades",
    element: <ViewGrades />,
    loader: viewGradesLoader,
    action: viewGradesAction
}

export {viewGradesRouteObject}
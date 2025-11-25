import ViewGrades from "./ViewGrades";
import { viewGradesLoaderStudent } from "./viewGradesLoaderStudent";

const viewGradesRouteObject = {
    path: "view-grades",
    element: <ViewGrades />,
    loader: viewGradesLoaderStudent,
}

export {viewGradesRouteObject}
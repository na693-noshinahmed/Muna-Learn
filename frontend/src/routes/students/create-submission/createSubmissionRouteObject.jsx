import CreateSubmission from "./CreateSubmission";
import { createSubmissionLoader } from "./createSubmissionLoader";
import { createSubmissionAction } from "./createSubmissionAction";

const createSubmissionRouteObject = {
    path: "create-submission/:AssignmentID",
    element: <CreateSubmission />,
    loader: createSubmissionLoader,
    action: createSubmissionAction
}

export {createSubmissionRouteObject}
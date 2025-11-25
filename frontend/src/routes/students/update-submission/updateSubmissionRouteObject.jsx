import UpdateSubmission from "./UpdateSubmission.jsx";
import { updateSubmissionLoader } from "./updateSubmissionLoader";
import { updateSubmissionAction } from "./updateSubmissionAction";

const updateSubmissionRouteObject = {
    path: "update-submission/:AssignmentID",
    element: <UpdateSubmission />,
    loader: updateSubmissionLoader,
    action: updateSubmissionAction
}

export {updateSubmissionRouteObject}
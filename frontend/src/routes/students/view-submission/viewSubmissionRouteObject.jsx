import ViewSubmission from "./ViewSubmission";
import { viewSubmissionLoader } from "./viewSubmissionLoader";

const viewSubmissionRouteObject = {
    path: "view-submission/:AssignmentID",
    element: <ViewSubmission />,
    loader: viewSubmissionLoader
}

export {viewSubmissionRouteObject}
import LoginPage from "./Login.jsx";
import App from "../../App.jsx"
import { loginAction } from "./loginAction";
import { Navigate } from "react-router";

const router = {
  path: "/",
  element: <App />,
  children: [
    {
      index: true,
      element: <Navigate to="/login" replace />
    },
    {
      path: "login",
      element: <LoginPage />,
      action: loginAction,
    }
  ]
}

export default router
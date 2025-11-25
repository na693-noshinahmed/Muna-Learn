import Header from "./components/Header.jsx"
import NavBar from "./components/NavBar.jsx"
import { Outlet } from "react-router-dom"
import studentNavBarInfo from "./routes/students/navbar.js"
import teacherNavBarInfo from "./routes/teachers/navbar.js"
import { RoleContext } from "./RoleProvider.jsx"
import { useContext } from "react"
import Notification from "./components/Notification.jsx"
import {ToastContainer, toast, Slide}  from "react-toastify"

export default function App() {
  const {role} = useContext(RoleContext)
  let navLinks = []
  if (role === 'teacher') {
    navLinks = teacherNavBarInfo
  } else if (role === 'student') {
    navLinks = studentNavBarInfo
  } else {
    navLinks = [{"path": ""}]
  }
  const notify = (msg) => toast(msg)

  return (
    <>
      <Header />
      <NavBar links={navLinks} />
      <main>
        <Outlet context={{notify}}/>
        <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        draggable={false}
        pauseOnHover
        theme="light"
        transition={Slide}
        toastClassName="notification"
        />
      </main>
      <footer>
        <p>© 2025 Noshin Ahmed. All rights reserved. Muna Learn</p>
      </footer>
    </>
  )
}

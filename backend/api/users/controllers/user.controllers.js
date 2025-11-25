import { findUserService, getStudentsService } from "../services/user.services.js"

const findUserController = async (req, res) => {
    try {
        const {Username, Password} = req.body
        const {Role, token} = await findUserService(Username, Password)
        res.status(200)
        .cookie("token", token, {
            maxAge: 3600000,
            httpOnly:true,
            secure: true,
        })
        .json({success:true, message:"Login Successful!", role:Role})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"Could not log in user"})
    }
}

const returnRoleFromCookieController = async (req, res) => {
    try {
        const {Role} = req.user
        res.status(200).json({success:true, Role})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"User does not have a valid cookie"})
    }
}

const getStudentsController = async (req, res) => {
    try {
        const result = await getStudentsService()
        res.status(200).json({success: true, data: result})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"Cannot retrieve data"})
    }
}

const logoutUserController = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly:true,
            secure: true
        })
        res.status(200).json({success:true, message:"Logout Successful"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"Could not logout"})
    }
}

export {findUserController, getStudentsController, returnRoleFromCookieController, logoutUserController}
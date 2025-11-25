import { findUser, getStudents } from "../models/user.models.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const findUserService = async (username, password) => {
    try {
        const [result] = await findUser(username, password)
        const {UserID, FirstName, LastName, Role} = result
        const token = jwt.sign({UserID, FirstName, LastName, Role}, process.env.JWT_SECRET, {expiresIn: "1h"})
        return {token, Role}
    } catch (error) {
        throw error
    }
}

const getStudentsService = async () => {
    try {
        const result = await getStudents()
        return result
    } catch (error) {
        throw error
    }
}

export {findUserService, getStudentsService}
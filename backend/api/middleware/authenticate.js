import jwt from "jsonwebtoken"

const checkToken = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({success:false, message:"Please Log In"})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (err) {
        return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
}

const checkRole = (req, res, next) => {
    const {Role} = req.user
    if (Role === "teacher") {
        next()
    } else {
        return res.status(403).json({success:false, message:"Not authorized to access this resource"})
    }
}

export {checkToken, checkRole}

import joi from "joi"

const loginSchema = joi.object({
    Username: joi.string().required(),
    Password: joi.string().required()
})

export { loginSchema }
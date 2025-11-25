const validateBody = (schema) => (req, res, next) => {
    const {error} = schema.validate(req.body)
    if (error) {
        console.log(error)
        return res.status(400).json({success:false, message:error.message})
    } else {
        next()
    }
}

const validatePath = (schema) => (req, res, next) => {
    const {error} = schema.validate(req.params)
    if (error) {
        console.log(error)
        return res.status(400).json({success:false, message:error.message})
    } else {
        next()
    }
}

const validateQuery = (schema) => (req, res, next) => {
    const {error} = schema.validate(req.query)
    if (error) {
        console.log(error)
        return res.status(400).json({success:false, message:error.message})
    } else {
        next()
    }
}

export {validateBody, validatePath, validateQuery}
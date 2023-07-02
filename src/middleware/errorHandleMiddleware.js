import {validationResult} from "express-validator";

export const validateRequests = (err, req, res, next) => {
    if (err) {
        res.status(422).send(err)
    }
    next()
}


export const postErrorHandling = (req, res, next) => {
    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(422).send(errors.array())
    }
    next()
}

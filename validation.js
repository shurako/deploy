//VALIDADION
const Joi = require('@hapi/joi');


//register Validation


const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        eMail: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })

    return schema.validate(data)
}

const loginValidation = (data) => {
    const schema = Joi.object({
        eMail: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })

    return schema.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
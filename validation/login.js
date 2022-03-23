const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function validateLoginInputs (data) {
    //this data will be parsed from the registration form from the front end
    let errors = {}

    //consvert empty fields to strings
    data.email = !isEmpty(data.email) ? data.email : ''
    data.password = !isEmpty(data.password) ? data.password : ''

    //email checks
    if(Validator.isEmpty(data.email)){
        errors.email = 'Email field is required'
    }else if(!Validator.isEmpty(data.email)){
        errors.email = 'Email is invalid'
    }

    //password checks
    if(Validator.isEmpty(data.password)){
        errors.password = 'Password is required'
    }

    return{
        errors,
        isValid: isEmpty(errors)
    }

}
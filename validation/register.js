const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function validateRegistrationInputs (data) {
    //this data will be parsed from the registration form from the front end
    let errors = {}

    //consvert empty fields to strings
    data.name = !isEmpty(data.name) ? data.name : ''
    data.email = !isEmpty(data.email) ? data.email : ''
    data.password = !isEmpty(data.password) ? data.password : ''
    data.password2 = !isEmpty(data.password2) ? data.password2 : ''

    //check names
    if(Validator.isEmpty(data.name)){
        errors.name = 'Name field is required'
    }

    //email checks
    if(Validator.isEmpty(data.email)){
        errors.email = 'Email field is required'
    }else if(!Validator.isEmail(data.email)){
        errors.email = 'Email is invalid'
    }

    //password checks
    if(Validator.isEmpty(data.password)){
        errors.password = 'Password is required'
    }

    if(Validator.isEmpty(data.password2)){
        errors.password2 = 'Confirm Password is required'
    }

    if(!Validator.isLength(data.password, {min:6, max:30})){
        errors.password = 'Password must be at least 6 characters'
    }

    if(!Validator.equals(data.password, data.password2)){
        errors.password2 = 'Passowrds dont match'
    }

    return{
        errors,
        isValid: isEmpty(errors)
    }

}
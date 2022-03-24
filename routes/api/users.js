const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')

//loading input validations
const validateRegistrationInputs = require('../../validation/register')
const validateLoginInputs = require('../../validation/login')

//the user model
const User = require('../../models/User')
const { response } = require('express')

// @route POST api/users/register
// @desc Register user
// @access Public

router.post('/register', (request, response) => {
    //form validations
    const {errors, isValid} = validateRegistrationInputs(request.body)

    //validation checks
    if(!isValid){
        return response.status(400).json(errors)
    }

    User.findOne({email:request.body.email}).then(user => {
        if(user){
            //if we find a user, reject email
            return response.status(400).json({email:'Email already exists'})
        } else{
            //register neew user
            const newUser = new User({
                name:request.body.name,
                email:request.body.email,
                password:request.body.password
            })
            //hash the password
            bcrypt.genSalt(10, (err, salt)=> {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user=>response.json(user))
                        .catch(err => console.log(err)
                    )
                })
            })
        }
    })
})

//@route POST api/users/login
//@desc Login user and return JWT token
//@access PUBLIC

router.post('/login', (request, response)=>{
    const {errors, isValid} = validateLoginInputs(request.body)

    if(!isValid){
        return response.status(400).json(errors)
    }

    const email = request.body.email
    const password = request.body.password
    
    //find user by email
    User.findOne({email}).then(user => {
        if(!user){
            return response.status(400).json({emailNotFound: 'Email not found'})
        }

        //check passwords
        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch){
                //we have matched the user
                //create a jwt payload
                const payload = {
                    id:user.id,
                    name:user.name
                }
                jwt.sign(
                    payload,
                    keys.secretKeys,
                    {
                        expiresIn:31556926
                    },
                    (err, token) => {
                        response.json({
                            success:true,
                            token:'Bearer ' + token
                        })
                    }
                )
            }else{
                return response.status(400).json({
                    incorrectPassword: 'Incorrect password'
                })
            }
        })
    })
})

module.exports = router



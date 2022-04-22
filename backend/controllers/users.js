import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const router = express.Router()

router.get('/all', async (req, res)=>{
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        res.json({message:error.message})
    }
})

router.post('/register/', async (req, res) => {
    const {username, email, password} = req.body
    try{    
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds)
        const user = new User({username, email, passwordHash})
        const savedUser = await user.save()
        res.json(savedUser)
    }catch(error){
        res.json({message:error.message})
    }
}) 


router.post('/login', async (req, res) => {
    console.log(req.body)
    const {email, password} = req.body
    try {
        const foundUser = await User.findOne({email:email})

        let evaluateUser = foundUser === null ? false : await bcrypt.compare(password, foundUser.passwordHash)
       
        if(!(foundUser && evaluateUser)){
            return res.json({error:'Invalid username or password, please check and try again'})
        }

        const userForToken = {
            username:foundUser.username,
            email:foundUser.email,
            id:foundUser._id
        }
        console.log(userForToken)

        const token = jwt.sign(userForToken, process.env.SECRET)
        res.json({token, username:foundUser.username, email:foundUser.email})
    } catch (error) {
        res.json({message:error.message})
    }
})
export default router 
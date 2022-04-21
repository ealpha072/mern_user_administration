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
    console.log(req.body.password)
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
    const {email, password} = req.body
    try {
        const user = User.findOne({email})
        const passWordMatch = user === null ? false : await bcrypt.compare(password, user.passwordHash)

        if(!(user && passWordMatch)){
            return res.status(400).json({error:'Invalid username or password'})
        }

        const userForToken = {
            email:email,
            id:user._id
        }
        const token = jwt.sign(userForToken, process.env.SECRET)
        res.status(200).json({token, username:user.username, email:user.email})

    } catch (error) {
        res.json({message:error.message})
    }
})
export default router
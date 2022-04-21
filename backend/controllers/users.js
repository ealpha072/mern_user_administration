import express from 'express'
import bcrypt from 'bcrypt'
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

router.post('/register/', (req, res)=>{
    const user = req.body;
    try{
        const newUser = new User(user)
        await newUser.save()
        res.json(newUser)
    }catch(error){
        res.json({message:error.message})
    }
})

export default router
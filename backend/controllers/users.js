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

// router.post('/register', async(req, res)=> {
//     console.log(req.body)
//     try {
//         const user = req.body
//         const mysalt = await bcrypt.genSalt(10)
//         const hashedPass = await bcrypt.hash(user.password, mysalt)

//         const newUser = new User({
//             ...user,
//             password:hashedPass
//         })
//         const savedUser = await newUser.save()
//         res.status(200).json(savedUser)
//     } catch (error) {
//         res.status(400).json({msg: error.message})
//     }
// })


export default router
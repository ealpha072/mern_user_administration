import dotenv from 'dotenv'
dotenv.config({path: './.env'})
import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors'
import morgan from 'morgan'
import router from './controllers/users.js';

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/users', router)

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGODB_URL 

mongoose.connect(URL, 
    {useUnifiedTopology:true, useNewUrlParser:true})
    .then(
    () => app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`))
).catch(err => console.log(err.message))

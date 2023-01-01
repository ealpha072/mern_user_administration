import config from "./utils/config.js";
import express  from "express";
//import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors'
import morgan from 'morgan'
import middleware from './utils/middleware.js';
import router from './controllers/users.js';
import logger from "./utils/logger.js";

const app = express()

logger.info(`Connecting to `, config.URL)
mongoose.connect(config.URL,
    {useUnifiedTopology:true, useNewUrlParser:true})
    .then(() => {
        logger.info(`Connected to Database, ready to query`)
    }
)

app.use(cors())
app.use(middleware.requestLogger)
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/users', router)
app.use(middleware.unknownEndpoint)





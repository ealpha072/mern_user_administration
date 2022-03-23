const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const dbConfigs = require('./config/keys')

mongoose
    .connect(dbConfigs.MONGOURI, {useNewUrlParser:true})
        .then(()=> console.log('Successfully connected to database'))
        .catch(err => console.log(err))


app.listen(dbConfigs.PORT, ()=>console.log('Server up and running on port ', dbConfigs.PORT))
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

const users = require('./routes/api/users')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const dbConfigs = require('./config/keys')

mongoose.connect(dbConfigs.MONGOURI, {useNewUrlParser:true})
    .then(()=> console.log('Successfully connected to database'))
    .catch(err => console.log(err))

//passport middle ware
app.use(passport.initialize())

//passport config
require('./config/passport')(passport)

//routes
app.use('/api/users', users )


app.listen(dbConfigs.PORT, ()=>console.log('Server up and running on port ', dbConfigs.PORT))
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')
const landing_router = require('./routes/landing')
const signup_router = require('./routes/signup')
const user_router = require('./routes/login')
const post_router = require('./routes/post')
const passport = require('./controllers/passportsetup')

let app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
    session({
        secret: 'tinyisaprincess',
        resave: false,
        saveUninitialized: true,
    })
)
app.use(passport.initialize())
app.use(passport.session())
app.use('/signup', signup_router)
app.use('/user', user_router)
app.use('/posts', post_router)
app.use('/', landing_router)
app.set('views', './views')
app.set('view engine', 'ejs')

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.listen(
    process.env.PORT,
    console.log(`The server is running on Port: ${process.env.PORT}`)
)

let express = require('express')
let router = express.Router()
let passport = require('passport')
let login_controller = require('../controllers/login_controller')

router.get('/login', (req, res) =>
    res.render('login', { route: 'login', user: req.user })
)

router.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/',
        successMessage: 'The user has been logged in...',
        failureRedirect: '/signup',
        failureMessage: 'Something went wrong...',
    })
)

router.get('/logout', login_controller.logoutUser)

router.get('/secret', (req, res) => {
    if (req.user) res.render('joinclub', { route: 'secret', user: req.user })
    else res.redirect('/')
})

router.post('/secret', login_controller.addMembership)

module.exports = router

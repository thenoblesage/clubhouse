let express = require('express')
let router = express.Router()
let signup_controller = require('../controllers/signup_controller')

router.get('/', (req, res) =>
    res.render('signup', { route: 'signup', user: req.user })
)
router.post('/', signup_controller.handleSignup)

module.exports = router

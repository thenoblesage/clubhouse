const express = require('express')
const router = express.Router()
const post_controller = require('../controllers/post_controller')

router.get('/new', (req, res) => {
    if (req.user)
        res.render('createpost', { route: 'createpost', user: req.user })
    else res.redirect('/')
})

router.post('/new', post_controller.newPost)

router.post('/remove', post_controller.removePost)

module.exports = router

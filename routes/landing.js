let express = require('express')
let router = express.Router()
const Post = require('../models/post')

router.get('/', async (req, res) => {
    const posts = await Post.find().populate('author')
    res.render('landing', {
        route: 'landing',
        user: req.user,
        posts,
    })
})

module.exports = router

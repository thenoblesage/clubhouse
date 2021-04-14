const bcrypt = require('bcrypt')
let User = require('../models/user')
const salt_rounds = 10

/**
 * The function takes the relevant information from the req object and creates a new user. This user is then saved to the database.
 * @param {Object} req
 * @param {Object} res
 */

exports.handleSignup = (req, res) => {
    const { f_name, l_name, username, password } = req.body
    bcrypt.hash(password, salt_rounds, async (err, hash) => {
        let new_user = User({
            f_name,
            l_name,
            username,
            password: hash,
        })
        await new_user.save()
        console.log('The user has been saved...')
    })
    res.redirect('/')
}

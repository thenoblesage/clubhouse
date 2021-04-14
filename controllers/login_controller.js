const User = require('../models/user')

/**
 * The function dds membership status to a user's profile.
 * @param {Object} req
 * @param {Object} res
 */

exports.addMembership = async (req, res) => {
    let user = await User.findById(req.user._id)
    if (req.body.password === process.env.ADMIN_PASSWORD) {
        user.mem_status = true
        user.admin = true
        await user.save()
        console.log(
            `SUCCESS: Admin status for ${req.user.f_name} ${req.user.l_name} has been updated.`
        )
    }
    if (req.body.password === process.env.SECRET_PASSWORD) {
        user.mem_status = true
        await user.save()
        console.log(
            `SUCCESS: Membership status for ${req.user.f_name} ${req.user.l_name} has been updated.`
        )
    }
    res.redirect('/')
}

/**
 * The function logs the current user out.
 * @param {Object} req
 * @param {Object} res
 */

exports.logoutUser = (req, res) => {
    req.logout()
    res.redirect('/')
}

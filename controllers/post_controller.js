const Post = require('../models/post')
const User = require('../models/user')

/**
 * This function creates a new Post instance with the data entered into the form. It then saves it to the database and makes the necessary changes to the relevant user.
 * @param {Object} req
 * @param {Object} res
 */
exports.newPost = async (req, res) => {
    const { title, text } = req.body
    let new_post = new Post({ author: req.user._id, text, title })
    await updateUserPosts(req.user._id, new_post._id)
    await new_post.save()
    res.redirect('/')
}

/**
 * This function adds the new post to the user's posts array.
 * @param {Schema.Types.ObjectId} user_id
 * @param {Schema.Types.ObjectId} post_id
 */
const updateUserPosts = async (user_id, post_id) => {
    let user = await User.findById(user_id)
    if (!user) return
    user.posts.push(post_id)
    await user.save()
    console.log('SUCCESS: User posts update.')
}

/**
 * This function removes a post as well as removes the Object ID from the User's array of posts.
 * @param {Object} req
 * @param {Object} res
 */
exports.removePost = async (req, res) => {
    const { post_id } = req.body
    let post = await Post.findById(post_id)
    let user = await User.findById(post.author)
    console.log(user)
    const index = user.posts.indexOf(post_id)
    if (index > -1) user.posts.splice(index, 1)
    user.save()
    post.remove()
    res.redirect('/')
}

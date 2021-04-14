let mongoose = require('mongoose')

let { Schema } = mongoose

let user = new Schema({
    admin: { type: Boolean, default: false },
    f_name: { type: String, required: true },
    l_name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    mem_status: { type: Boolean, default: false },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
})

module.exports = mongoose.model('User', user)

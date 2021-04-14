let mongoose = require('mongoose')

let { Schema } = mongoose

let post = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now },
    text: { type: String, required: true },
    title: { type: String, required: true },
})

module.exports = mongoose.model('Post', post)

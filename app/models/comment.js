const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  blog: {
    // Each comment belongs to a specific blog
    // Different users are still able to delete a comment
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog'
  },
  owner: {
    // Indicates a User owning a Comment
    // This allows a User to delete a comment in a blog
    // they don't own
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Comment', commentSchema)

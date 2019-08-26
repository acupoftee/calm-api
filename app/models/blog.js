const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  comments: [{
    // Blogs will have many comments owned by
    // different users
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  owner: {
    // Indicates ownership from a single user
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Blog', blogSchema)

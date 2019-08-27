const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  isAdmin: {
    // added for content review privlages
    type: Boolean,
    default: false
  },
  avatarUrl: {
    type: String,
    required: true,
    default: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/1/15/PI_Orisa_Protector.png'
  },
  displayName: {
    type: String,
    required: true,
    default: 'New User'
  },
  summary: {
    type: String
  },
  hashedPassword: {
    type: String,
    required: true
  },
  token: String
}, {
  timestamps: true,
  toObject: {
    // remove `hashedPassword` field when we call `.toObject`
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    }
  }
})

module.exports = mongoose.model('User', userSchema)

const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
    default: 'New User'
  },
  summary: {
    type: String
  },
  avatar_url: {
    type: String,
    required: true,
    default: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/1/15/PI_Orisa_Protector.png'
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Profile', profileSchema)

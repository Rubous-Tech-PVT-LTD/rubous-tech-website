const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'Please add a team member id'],
    unique: true,
    lowercase: true,
    trim: true
  },
  name: {
    type: String,
    required: [true, 'Please add a team member name'],
    trim: true
  },
  role: {
    type: String,
    required: [true, 'Please add a role'],
    trim: true
  },
  image: {
    type: String,
    required: [true, 'Please add an image URL']
  },
  bio: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  socialLinks: {
    linkedin: {
      type: String,
      default: ''
    },
    twitter: {
      type: String,
      default: ''
    },
    github: {
      type: String,
      default: ''
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Team', TeamSchema);

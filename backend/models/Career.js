const mongoose = require('mongoose');

const CareerSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'Please add a job id'],
    unique: true,
    lowercase: true,
    trim: true
  },
  title: {
    type: String,
    required: [true, 'Please add a job title'],
    trim: true
  },
  department: {
    type: String,
    required: [true, 'Please add a department'],
    trim: true
  },
  location: {
    type: String,
    required: [true, 'Please add a location'],
    trim: true
  },
  type: {
    type: String,
    required: [true, 'Please add an employment type'],
    trim: true
  },
  experienceLevel: {
    type: String,
    required: [true, 'Please add an experience level'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    trim: true
  },
  responsibilities: {
    type: [String],
    default: []
  },
  requirements: {
    type: [String],
    default: []
  },
  postedAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Career', CareerSchema);

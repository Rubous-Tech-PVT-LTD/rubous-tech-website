const mongoose = require('mongoose');

const CareerApplicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Please add a full name'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email'
      ]
    },
    position: {
      type: String,
      required: [true, 'Please add a position'],
      trim: true
    },
    coverMessage: {
      type: String,
      trim: true
    },
    resumeFileName: {
      type: String,
      required: [true, 'Please add a resume file name'],
      trim: true
    },
    jobId: {
      type: String,
      trim: true
    },
    status: {
      type: String,
      enum: ['pending', 'reviewed', 'shortlisted', 'rejected'],
      default: 'pending'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('CareerApplication', CareerApplicationSchema);
const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, 'Please add a service id'],
      unique: true,
      lowercase: true,
      trim: true
    },
    icon: {
      type: String,
      required: [true, 'Please add an icon key'],
      trim: true
    },
    title: {
      type: String,
      required: [true, 'Please add a service title'],
      trim: true
    },
    tagline: {
      type: String,
      required: [true, 'Please add a service tagline'],
      trim: true
    },
    features: {
      type: [String],
      default: []
    },
    color: {
      type: String,
      default: 'blue',
      trim: true,
      lowercase: true
    },
    isCore: {
      type: Boolean,
      default: false
    },
    displayOrder: {
      type: Number,
      default: 0
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Service', ServiceSchema);
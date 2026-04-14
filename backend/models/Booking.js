const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: [true, 'Please add a client name'],
    trim: true
  },
  clientEmail: {
    type: String,
    required: [true, 'Please add an email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  date: {
    type: String, // String in YYYY-MM-DD format to match front-end
    required: [true, 'Please add a date']
  },
  timeSlot: {
    type: String,
    required: [true, 'Please add a time slot']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Static method to check availability
BookingSchema.statics.checkAvailability = async function(date, timeSlot) {
  const booking = await this.findOne({ date, timeSlot, status: { $ne: 'cancelled' } });
  return !booking;
};

module.exports = mongoose.model('Booking', BookingSchema);

const Booking = require('../models/Booking');

// @desc    Create a new booking
// @route   POST /api/bookings
exports.createBooking = async (req, res) => {
  try {
    const { clientName, clientEmail, date, timeSlot } = req.body;

    if (!clientName || !clientEmail || !date || !timeSlot) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    // Check availability
    const isAvailable = await Booking.checkAvailability(date, timeSlot);
    if (!isAvailable) {
      return res.status(400).json({ success: false, message: 'This slot is already booked' });
    }

    const booking = await Booking.create({ clientName, clientEmail, date, timeSlot });

    res.status(201).json({
      success: true,
      data: booking,
      message: 'Booking request sent successfully!'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// @desc    Get all bookings
// @route   GET /api/bookings
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: bookings.length, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc    Check available slots for a date
// @route   GET /api/bookings/available?date=YYYY-MM-DD
exports.getAvailableSlots = async (req, res) => {
  try {
    const { date } = req.query;
    if (!date) {
      return res.status(400).json({ success: false, message: 'Date is required' });
    }

    // Standard slots
    const allSlots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];
    
    const bookings = await Booking.find({ date, status: { $ne: 'cancelled' } });
    const bookedSlots = bookings.map(b => b.timeSlot);

    const availableSlots = allSlots.filter(slot => !bookedSlots.includes(slot));

    res.status(200).json({ success: true, data: availableSlots });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

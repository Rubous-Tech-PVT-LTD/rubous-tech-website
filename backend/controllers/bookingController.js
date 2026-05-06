const Booking = require('../models/Booking');

// @desc    Create a new booking
// @route   POST /api/bookings
exports.createBooking = async (req, res) => {
  try {
    const { clientName, clientEmail, service, time, date } = req.body;

    if (!clientName || !clientEmail) {
      return res.status(400).json({ success: false, message: 'Please provide your name and email' });
    }

    const isConsultationRequest = Boolean(service && !date);
    const isScheduledBooking = Boolean(date && time);

    if (!isConsultationRequest && !isScheduledBooking) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a service or a date and time'
      });
    }

    const booking = await Booking.create({
      clientName,
      clientEmail,
      service,
      time,
      date: date || null,
    });

    res.status(201).json({
      success: true,
      data: booking,
      message: isConsultationRequest
        ? 'Consultation request sent successfully!'
        : 'Booking request sent successfully!'
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

const express = require('express');
const router = express.Router();
const { 
  createBooking, 
  getBookings, 
  getAvailableSlots 
} = require('../controllers/bookingController');

router.route('/')
  .get(getBookings)
  .post(createBooking);

router.get('/available', getAvailableSlots);

module.exports = router;

const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../data/bookings.json');

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, '../data'))) {
  fs.mkdirSync(path.join(__dirname, '../data'));
}

// Ensure bookings file exists
if (!fs.existsSync(DATA_PATH)) {
  fs.writeFileSync(DATA_PATH, JSON.stringify([]));
}

const Booking = {
  getAll: () => {
    const data = fs.readFileSync(DATA_PATH, 'utf8');
    return JSON.parse(data);
  },

  create: (bookingData) => {
    const bookings = Booking.getAll();
    const newBooking = {
      id: Date.now().toString(),
      ...bookingData,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    bookings.push(newBooking);
    fs.writeFileSync(DATA_PATH, JSON.stringify(bookings, null, 2));
    return newBooking;
  },

  checkAvailability: (date, timeSlot) => {
    const bookings = Booking.getAll();
    return !bookings.some(b => b.date === date && b.timeSlot === timeSlot);
  }
};

module.exports = Booking;

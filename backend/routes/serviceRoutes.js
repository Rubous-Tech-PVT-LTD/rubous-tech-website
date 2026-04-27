const express = require('express');
const rateLimit = require('express-rate-limit');
const router = express.Router();
const { getServices, getServiceById } = require('../controllers/serviceController');

const servicesLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 150,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests, please try again later.' }
});

router.get('/', servicesLimiter, getServices);
router.get('/:serviceId', servicesLimiter, getServiceById);

module.exports = router;
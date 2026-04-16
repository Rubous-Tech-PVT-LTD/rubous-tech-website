const express = require('express');
const rateLimit = require('express-rate-limit');
const router = express.Router();
const { getCareers, getCareerById } = require('../controllers/careerController');

const careersLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests, please try again later.' }
});

router.get('/', careersLimiter, getCareers);
router.get('/:jobId', careersLimiter, getCareerById);

module.exports = router;

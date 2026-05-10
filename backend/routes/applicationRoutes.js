const express = require('express');
const rateLimit = require('express-rate-limit');
const router = express.Router();
const { createApplication, getApplications } = require('../controllers/applicationController');

const applicationsLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests, please try again later.' }
});

router.route('/')
  .get(applicationsLimiter, getApplications)
  .post(applicationsLimiter, createApplication);

module.exports = router;
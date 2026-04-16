const express = require('express');
const router = express.Router();
const {
  getPricing,
  getPricingByMarket
} = require('../controllers/pricingController');

router.get('/', getPricing);
router.get('/:marketId', getPricingByMarket);

module.exports = router;

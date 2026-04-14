const Pricing = require('../models/Pricing');

// @desc    Get all pricing data
// @route   GET /api/pricing
exports.getPricing = (req, res) => {
  try {
    const pricing = Pricing.getAll();
    res.status(200).json({ success: true, data: pricing });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while fetching pricing',
      error: error.message
    });
  }
};

// @desc    Get pricing for one market
// @route   GET /api/pricing/:marketId
exports.getPricingByMarket = (req, res) => {
  try {
    const { marketId } = req.params;
    const marketPricing = Pricing.getMarketById(marketId);

    if (!marketPricing) {
      return res.status(404).json({
        success: false,
        message: `No pricing found for market '${marketId}'`
      });
    }

    res.status(200).json({ success: true, data: marketPricing });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while fetching market pricing',
      error: error.message
    });
  }
};

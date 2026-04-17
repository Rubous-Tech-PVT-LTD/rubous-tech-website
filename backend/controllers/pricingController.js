const Pricing = require('../models/Pricing');

// @desc    Get all pricing data
// @route   GET /api/pricing
exports.getPricing = async (req, res) => {
  try {
    const markets = await Pricing.find({ isActive: true }).sort({ createdAt: 1 }).lean();
    const noData = markets.length === 0;
    const latestTimestamp = markets.reduce((maxTimestamp, market) => {
      const marketTimestamp = new Date(market.updatedAt || market.createdAt || Date.now()).getTime();
      return marketTimestamp > maxTimestamp ? marketTimestamp : maxTimestamp;
    }, 0);

    const lastUpdated = latestTimestamp > 0 ? new Date(latestTimestamp).toISOString().slice(0, 10) : null;

    res.status(200).json({
      success: true,
      message: noData ? 'No data found' : 'Pricing fetched successfully',
      data: {
        lastUpdated,
        markets,
        note: markets[0]?.note || 'Pricing may vary depending on project scope and requirements.'
      }
    });
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
exports.getPricingByMarket = async (req, res) => {
  try {
    const marketId = typeof req.params.marketId === 'string' ? req.params.marketId.trim().toLowerCase() : '';

    if (!marketId) {
      return res.status(400).json({
        success: false,
        message: 'marketId is required'
      });
    }

    const marketPricing = await Pricing.findOne({ id: marketId, isActive: true }).lean();

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

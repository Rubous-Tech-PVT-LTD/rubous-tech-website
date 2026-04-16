const Career = require('../models/Career');

// @desc    Get all careers page data
// @route   GET /api/careers
exports.getCareers = async (req, res) => {
  try {
    const activeJobs = await Career.find({ isActive: true })
      .sort({ postedAt: -1 })
      .lean();

    if (!activeJobs.length) {
      return res.status(200).json({
        success: true,
        count: 0,
        message: 'No jobs available',
        data: []
      });
    }

    res.status(200).json({
      success: true,
      count: activeJobs.length,
      data: activeJobs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while fetching careers data',
      error: error.message
    });
  }
};

// @desc    Get one active career by id
// @route   GET /api/careers/:jobId
exports.getCareerById = async (req, res) => {
  try {
    const { jobId } = req.params;

    const job = await Career.findOne({ id: jobId.toLowerCase(), isActive: true }).lean();

    if (!job) {
      return res.status(404).json({
        success: false,
        message: `No active career found for id '${jobId}'`
      });
    }

    res.status(200).json({
      success: true,
      data: job
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while fetching career details',
      error: error.message
    });
  }
};

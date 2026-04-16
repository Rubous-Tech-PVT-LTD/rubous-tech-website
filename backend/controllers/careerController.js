const Career = require('../models/Career');
const mongoose = require('mongoose');

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

    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid job ID format. A valid MongoDB ObjectId is required.'
      });
    }

    const job = await Career.findOne({ _id: jobId, isActive: true }).lean();

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

const Team = require('../models/Team');

// @desc    Get all active team members
// @route   GET /api/team
exports.getTeamMembers = async (req, res) => {
  try {
    const teamMembers = await Team.find({ isActive: true })
      .sort({ createdAt: -1 })
      .lean();

    if (!teamMembers.length) {
      return res.status(200).json({
        success: true,
        count: 0,
        message: 'No team members found',
        data: []
      });
    }

    res.status(200).json({
      success: true,
      count: teamMembers.length,
      data: teamMembers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while fetching team members',
      error: error.message
    });
  }
};

// @desc    Get one team member by id
// @route   GET /api/team/:memberId
exports.getTeamMemberById = async (req, res) => {
  try {
    const { memberId } = req.params;

    const member = await Team.findOne({ id: memberId.toLowerCase(), isActive: true }).lean();

    if (!member) {
      return res.status(404).json({
        success: false,
        message: `No active team member found for id '${memberId}'`
      });
    }

    res.status(200).json({
      success: true,
      data: member
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while fetching team member',
      error: error.message
    });
  }
};

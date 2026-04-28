const express = require('express');
const router = express.Router();
const { getTeamMembers, getTeamMemberById } = require('../controllers/teamController');

router.get('/', getTeamMembers);
router.get('/:memberId', getTeamMemberById);

module.exports = router;

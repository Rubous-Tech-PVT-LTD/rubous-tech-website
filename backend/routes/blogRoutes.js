const express = require('express');
const { getBlogs } = require('../controllers/blogController');

const router = express.Router();

// Single consolidated blog endpoint
router.get('/', getBlogs);

module.exports = router;

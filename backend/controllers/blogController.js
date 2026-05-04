const Blog = require('../models/Blog');

// @desc    Get blogs (3 by default)
// @route   GET /api/blogs
// @access  Public
const getBlogs = async (req, res) => {
  try {
    const { all, featured } = req.query;
    
    if (featured === 'true') {
      // Return only featured articles
      const blogs = await Blog.find({ isPublished: true, isFeatured: true })
        .sort({ publishedAt: -1, displayOrder: 1 })
        .limit(1) // Only one featured article
        .select('-content -__v');

      res.status(200).json({
        success: true,
        count: blogs.length,
        data: blogs
      });
    } else if (all === 'true') {
      // Return all blogs when load more is clicked
      const blogs = await Blog.find({ isPublished: true })
        .sort({ publishedAt: -1, displayOrder: 1 })
        .select('-content -__v');

      res.status(200).json({
        success: true,
        count: blogs.length,
        total: blogs.length,
        data: blogs
      });
    } else {
      // Return only 3 blogs by default
      const [blogs, totalCount] = await Promise.all([
        Blog.find({ isPublished: true })
          .sort({ publishedAt: -1, displayOrder: 1 })
          .limit(3)
          .select('-content -__v'),
        Blog.countDocuments({ isPublished: true })
      ]);

      res.status(200).json({
        success: true,
        count: blogs.length,
        total: totalCount,
        data: blogs
      });
    }
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching blogs'
    });
  }
};

module.exports = {
  getBlogs
};

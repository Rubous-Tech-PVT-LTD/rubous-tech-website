const CareerApplication = require('../models/CareerApplication');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/resumes/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: function (req, file, cb) {
    const allowedExtensions = /\.(pdf|doc|docx)$/;
    const allowedMimeTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    const extname = allowedExtensions.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedMimeTypes.includes(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed'));
    }
  }
}).single('resume');

// @desc    Create a new career application
// @route   POST /api/applications
const createApplication = async (req, res) => {
  try {
    // Use multer middleware
    upload(req, res, async function (err) {
      if (err) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).json({
            success: false,
            message: 'File size too large. Maximum size is 5MB.'
          });
        }
        if (err.message.includes('Only PDF, DOC, and DOCX files are allowed')) {
          return res.status(400).json({
            success: false,
            message: err.message
          });
        }
        return res.status(500).json({
          success: false,
          message: 'File upload error'
        });
      }

      const { fullName, email, position, coverMessage, jobId } = req.body;
      
      // Validate required fields
      if (!fullName || !email || !position) {
        return res.status(400).json({
          success: false,
          message: 'Please fill in all required fields'
        });
      }

      // Validate email format
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({
          success: false,
          message: 'Please enter a valid email address'
        });
      }

      // Check if resume file was uploaded
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: 'Resume file is required'
        });
      }

      // Create application object
      const applicationData = {
        fullName,
        email,
        position,
        coverMessage: coverMessage || '',
        resumeFileName: req.file.filename,
        jobId: jobId || null
      };

      const application = await CareerApplication.create(applicationData);

      res.status(201).json({
        success: true,
        data: application,
        message: 'Application submitted successfully!'
      });
    });
  } catch (error) {
    console.error('Application submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during application submission'
    });
  }
};

// @desc    Get all career applications
// @route   GET /api/applications
const getApplications = async (req, res) => {
  try {
    const applications = await CareerApplication.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while fetching applications',
      error: error.message
    });
  }
};

module.exports = {
  createApplication,
  getApplications,
  upload
};
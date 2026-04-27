const Service = require('../models/Service');

// @desc    Get all active services
// @route   GET /api/services
exports.getServices = async (req, res) => {
	try {
		const services = await Service.find({ isActive: true }).sort({ displayOrder: 1, createdAt: 1 }).lean();

		res.status(200).json({
			success: true,
			count: services.length,
			data: services
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Server error while fetching services',
			error: error.message
		});
	}
};

// @desc    Get one active service by id
// @route   GET /api/services/:serviceId
exports.getServiceById = async (req, res) => {
	try {
		const serviceId = typeof req.params.serviceId === 'string' ? req.params.serviceId.trim().toLowerCase() : '';

		if (!serviceId) {
			return res.status(400).json({
				success: false,
				message: 'serviceId is required'
			});
		}

		const service = await Service.findOne({ id: serviceId, isActive: true }).lean();

		if (!service) {
			return res.status(404).json({
				success: false,
				message: `No active service found for id '${serviceId}'`
			});
		}

		res.status(200).json({
			success: true,
			data: service
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Server error while fetching service details',
			error: error.message
		});
	}
};
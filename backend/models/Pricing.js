const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    popular: {
      type: Boolean,
      default: false
    },
    priceMin: {
      type: Number,
      required: true
    },
    priceMax: {
      type: Number,
      required: true
    },
    priceLabel: {
      type: String,
      required: true,
      trim: true
    },
    bestFor: {
      type: String,
      default: '',
      trim: true
    }
  },
  { _id: false }
);

const AddOnSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    type: {
      type: String,
      required: true,
      trim: true
    },
    priceMin: {
      type: Number,
      required: true
    },
    priceMax: {
      type: Number,
      required: true
    },
    priceLabel: {
      type: String,
      required: true,
      trim: true
    }
  },
  { _id: false }
);

const PricingSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, 'Please add a market id'],
      unique: true,
      lowercase: true,
      trim: true
    },
    name: {
      type: String,
      required: [true, 'Please add a market name'],
      trim: true
    },
    currency: {
      type: String,
      required: [true, 'Please add a currency code'],
      trim: true,
      uppercase: true
    },
    plans: {
      type: [PlanSchema],
      default: []
    },
    addOns: {
      type: [AddOnSchema],
      default: []
    },
    note: {
      type: String,
      default: '',
      trim: true
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Pricing', PricingSchema);

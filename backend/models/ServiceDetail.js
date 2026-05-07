const mongoose = require('mongoose');

const SectionCardSchema = new mongoose.Schema(
  {
    icon: {
      type: String,
      required: [true, 'Please add a card icon key'],
      trim: true
    },
    title: {
      type: String,
      required: [true, 'Please add a card title'],
      trim: true
    },
    body: {
      type: String,
      required: [true, 'Please add a card body'],
      trim: true
    }
  },
  { _id: false }
);

const FaqItemSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, 'Please add a FAQ question'],
      trim: true
    },
    answer: {
      type: String,
      required: [true, 'Please add a FAQ answer'],
      trim: true
    }
  },
  { _id: false }
);

const ServiceDetailSchema = new mongoose.Schema(
  {
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
      required: [true, 'Please add a service reference'],
      unique: true
    },
    hero: {
      badge: { type: String, default: '' },
      title: { type: String, required: [true, 'Please add a hero title'], trim: true },
      description: { type: String, required: [true, 'Please add a hero description'], trim: true },
      image: { type: String, required: [true, 'Please add a hero image'], trim: true }
    },
    communication: {
      title: { type: String, required: [true, 'Please add a communication title'], trim: true },
      description: { type: String, required: [true, 'Please add a communication description'], trim: true }
    },
    capabilities: {
      type: [SectionCardSchema],
      default: []
    },
    results: {
      title: { type: String, required: [true, 'Please add a results title'], trim: true },
      description: { type: String, required: [true, 'Please add a results description'], trim: true },
      highlight: {
        value: { type: String, required: [true, 'Please add a highlight value'], trim: true },
        label: { type: String, required: [true, 'Please add a highlight label'], trim: true }
      },
      cards: {
        type: [SectionCardSchema],
        default: []
      }
    },
    steps: {
      title: { type: String, required: [true, 'Please add a steps title'], trim: true },
      items: {
        type: [SectionCardSchema],
        default: []
      }
    },
    scenario: {
      title: { type: String, required: [true, 'Please add a scenario title'], trim: true },
      tabs: {
        type: [String],
        default: []
      },
      image: { type: String, required: [true, 'Please add a scenario image'], trim: true },
      alt: { type: String, required: [true, 'Please add scenario alt text'], trim: true }
    },
    faq: {
      title: { type: String, required: [true, 'Please add a FAQ title'], trim: true },
      items: {
        type: [FaqItemSchema],
        default: []
      }
    },
    cta: {
      title: { type: String, required: [true, 'Please add a CTA title'], trim: true },
      description: { type: String, required: [true, 'Please add a CTA description'], trim: true },
      primaryButton: { type: String, required: [true, 'Please add a CTA primary button label'], trim: true },
      secondaryButton: { type: String, required: [true, 'Please add a CTA secondary button label'], trim: true }
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('ServiceDetail', ServiceDetailSchema);
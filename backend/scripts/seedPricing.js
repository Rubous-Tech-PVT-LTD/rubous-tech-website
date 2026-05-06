const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const Pricing = require('../models/Pricing');

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const initialPricingMarkets = [
  {
    id: 'india',
    name: 'India Market Pricing',
    currency: 'INR',
    isActive: true,
    note: 'Pricing may vary depending on project scope and requirements. Final cost will be confirmed after discussion.',
    plans: [
      {
        id: 'starter',
        name: 'Starter',
        popular: false,
        priceMin: 15000,
        priceMax: 40000,
        priceLabel: 'Rs.15,000 - Rs.40,000',
        features: [
          '3 Core Automations',
          'Email Support',
          'Basic CRM Integration'
        ]
      },
      {
        id: 'growth',
        name: 'Growth',
        popular: true,
        priceMin: 50000,
        priceMax: 150000,
        priceLabel: 'Rs.50,000 - Rs.1,50,000',
        features: [
          'Unlimited Automations',
          'AI Chatbot Training',
          'Priority 24/7 Support',
          'Monthly Performance Audit'
        ]
      },
      {
        id: 'premium',
        name: 'Premium',
        popular: false,
        priceMin: 200000,
        priceMax: 600000,
        priceLabel: 'Rs.2,00,000 - Rs.6,00,000+',
        features: [
          'Dedicated Architect',
          'Private Infrastructure',
          'Custom API Development'
        ]
      }
    ]
   
  },
  {
    id: 'international',
    name: 'International Pricing',
    currency: 'USD',
    isActive: true,
    note: 'Pricing may vary depending on project scope and requirements. Final cost will be confirmed after discussion.',
    plans: [
      {
        id: 'starter',
        name: 'Starter',
        popular: false,
        priceMin: 500,
        priceMax: 1200,
        priceLabel: '$500 - $1200',
        features: [
          '3 Core Automations',
          'Email Support',
          'Basic CRM Integration'
        ]
      },
      {
        id: 'growth',
        name: 'Growth',
        popular: true,
        priceMin: 1500,
        priceMax: 4000,
        priceLabel: '$1500 - $4000',
        features: [
          'Unlimited Automations',
          'AI Chatbot Training',
          'Priority 24/7 Support',
          'Monthly Performance Audit'
        ]
      },
      {
        id: 'premium',
        name: 'Premium',
        popular: false,
        priceMin: 5000,
        priceMax: 15000,
        priceLabel: '$5000 - $15000+',
        features: [
          'Dedicated Architect',
          'Private Infrastructure',
          'Custom API Development'
        ]
      }
    ]
   
  }
];

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is not configured in .env');
  }

  await mongoose.connect(process.env.MONGO_URI);
};

const importData = async () => {
  try {
    await connectDB();
   
    await Pricing.deleteMany({});
    const inserted = await Pricing.insertMany(initialPricingMarkets);

    console.log(`Pricing seed complete: ${inserted.length} market(s) inserted.`);
  } catch (error) {
    console.error(`Pricing seed failed: ${error.message}`);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
};

if (require.main === module) {
  importData();
}

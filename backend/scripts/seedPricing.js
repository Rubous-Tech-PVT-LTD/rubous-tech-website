const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Pricing = require('../models/Pricing');

dotenv.config({ path: './.env' });

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
        bestFor: 'Basic websites, small businesses'
      },
      {
        id: 'growth',
        name: 'Growth',
        popular: true,
        priceMin: 50000,
        priceMax: 150000,
        priceLabel: 'Rs.50,000 - Rs.1,50,000',
        bestFor: 'Startups, web apps'
      },
      {
        id: 'premium',
        name: 'Premium',
        popular: false,
        priceMin: 200000,
        priceMax: 600000,
        priceLabel: 'Rs.2,00,000 - Rs.6,00,000+',
        bestFor: 'Advanced scalable applications'
      }
    ],
    addOns: [
      {
        id: 'ui-ux',
        name: 'UI/UX',
        type: 'one-time',
        priceMin: 10000,
        priceMax: 40000,
        priceLabel: 'Rs.10k - Rs.40k'
      },
      {
        id: 'seo',
        name: 'SEO',
        type: 'monthly',
        priceMin: 8000,
        priceMax: 30000,
        priceLabel: 'Rs.8k - Rs.30k/month'
      },
      {
        id: 'maintenance',
        name: 'Maintenance',
        type: 'monthly',
        priceMin: 5000,
        priceMax: 20000,
        priceLabel: 'Rs.5k - Rs.20k/month'
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
        bestFor: 'Basic websites'
      },
      {
        id: 'growth',
        name: 'Growth',
        popular: true,
        priceMin: 1500,
        priceMax: 4000,
        priceLabel: '$1500 - $4000',
        bestFor: 'Web apps, SaaS'
      },
      {
        id: 'premium',
        name: 'Premium',
        popular: false,
        priceMin: 5000,
        priceMax: 15000,
        priceLabel: '$5000 - $15000+',
        bestFor: 'Advanced scalable systems'
      }
    ],
    addOns: [
      {
        id: 'ui-ux',
        name: 'UI/UX',
        type: 'one-time',
        priceMin: 300,
        priceMax: 1000,
        priceLabel: '$300 - $1000'
      },
      {
        id: 'seo',
        name: 'SEO',
        type: 'monthly',
        priceMin: 200,
        priceMax: 800,
        priceLabel: '$200 - $800/month'
      },
      {
        id: 'maintenance',
        name: 'Maintenance',
        type: 'monthly',
        priceMin: 100,
        priceMax: 500,
        priceLabel: '$100 - $500/month'
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

const destroyData = async () => {
  try {
    await connectDB();

    const result = await Pricing.deleteMany({});
    console.log(`Pricing cleanup complete: ${result.deletedCount || 0} market(s) removed.`);
  } catch (error) {
    console.error(`Pricing cleanup failed: ${error.message}`);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
};

if (require.main === module) {
  if (process.argv[2] === '-d') {
    destroyData();
  } else {
    importData();
  }
}

module.exports = {
  importData,
  destroyData,
  initialPricingMarkets
};

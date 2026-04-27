const dotenv = require('dotenv');
const connectDB = require('../config/db');
const Service = require('../models/Service');

dotenv.config();

const seedData = [
  {
    id: 'ai-chatbot-automation',
    icon: 'Bot',
    title: 'AI Chatbot Automation',
    tagline: 'Never miss a customer again with AI-powered chat automation',
    features: ['Website + WhatsApp chatbot', 'Auto replies 24/7', 'Lead capture automatically'],
    color: 'blue',
    isCore: false,
    displayOrder: 1,
    isActive: true
  },
  {
    id: 'booking-automation-system',
    icon: 'Calendar',
    title: 'Booking Automation System',
    tagline: 'Convert messages into confirmed bookings instantly',
    features: ['Customer -> Message -> Booking auto-create', 'Time slot selection', 'Admin dashboard'],
    color: 'purple',
    isCore: false,
    displayOrder: 2,
    isActive: true
  },
  {
    id: 'whatsapp-automation',
    icon: 'MessageCircle',
    title: 'WhatsApp Automation',
    tagline: 'Turn WhatsApp into your 24/7 sales machine',
    features: ['Auto replies', 'Follow-ups', 'Broadcast messages'],
    color: 'green',
    isCore: false,
    displayOrder: 3,
    isActive: true
  },
  {
    id: 'lead-management-dashboard',
    icon: 'LayoutDashboard',
    title: 'Lead Management Dashboard',
    tagline: 'Manage and track every lead from one powerful dashboard',
    features: ['All leads in one place', 'Status tracking', 'Customer history'],
    color: 'orange',
    isCore: false,
    displayOrder: 4,
    isActive: true
  },
  {
    id: 'website-app-development',
    icon: 'Globe',
    title: 'Website & App Development',
    tagline: 'Modern websites and apps built for growth',
    features: ['SaaS websites', 'Business apps', 'Custom dashboards'],
    color: 'indigo',
    isCore: false,
    displayOrder: 5,
    isActive: true
  },
  {
    id: 'business-automation-core',
    icon: 'Zap',
    title: 'Business Automation (Core)',
    tagline: 'Automate your business and save hours every day',
    features: ['Manual work -> automated', 'CRM + workflows', 'Integration systems'],
    color: 'yellow',
    isCore: true,
    displayOrder: 6,
    isActive: true
  }
];

const seedServices = async () => {
  try {
    await connectDB();

    await Service.deleteMany({});
    await Service.insertMany(seedData);

    console.log('Services seeded successfully.');
    process.exit(0);
  } catch (error) {
    console.error(`Error seeding services: ${error.message}`);
    process.exit(1);
  }
};

seedServices();
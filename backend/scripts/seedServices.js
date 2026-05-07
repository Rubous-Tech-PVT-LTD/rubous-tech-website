const dotenv = require('dotenv');
const connectDB = require('../config/db');
const Service = require('../models/Service');
const ServiceDetail = require('../models/ServiceDetail');

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

const detailTemplates = {
  'ai-chatbot-automation': {
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    communicationDescription: 'Bridge customer questions and internal systems with a chat layer that can answer instantly, qualify intent, and hand off only the conversations that need a human.',
    tabs: ['Support', 'Lead capture', 'FAQ automation', 'WhatsApp', 'Web chat'],
    scenarioImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLPXVvrZb89hahDsa48hpfy_ha8Rqb5eHRg&s',
    highlight: { value: '98%', label: 'Average open rate' },
    faqTitle: 'Common questions',
    faqs: [
      { question: 'Can this handle WhatsApp and web chat?', answer: 'Yes. The same workflow can cover both channels so your team keeps one source of truth.' },
      { question: 'Can it connect to our CRM?', answer: 'Absolutely. The service can be wired into your CRM, helpdesk, or backend systems.' },
      { question: 'Does it work 24/7?', answer: 'Yes. The automation can reply instantly and keep conversations moving around the clock.' },
      { question: 'Can we qualify leads automatically?', answer: 'Yes. You can collect key details before handing off the conversation to a human.' }
    ],
    cta: {
      title: 'Ready to automate customer conversations?',
      description: 'Our team can help you design and launch a chat workflow that fits your business logic.',
      primaryButton: 'Book Consultation',
      secondaryButton: 'Explore Services'
    }
  },
  'booking-automation-system': {
    heroImage: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1400&q=80',
    communicationDescription: 'Guide prospects from interest to confirmed slot in one streamlined flow that checks availability and reduces manual coordination.',
    tabs: ['Consultations', 'Demos', 'Service appointments', 'Workshops', 'Follow-up calls'],
    scenarioImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
    highlight: { value: '3x', label: 'Faster booking flow' },
    faqTitle: 'Common questions',
    faqs: [
      { question: 'Can customers choose their own slot?', answer: 'Yes. The flow can present only the available times you want to offer.' },
      { question: 'Can it sync with calendars?', answer: 'Yes. It can connect to your booking calendars and scheduling tools.' },
      { question: 'Will it send reminders?', answer: 'Yes. You can automate confirmations and reminders to reduce no-shows.' },
      { question: 'Can admins review bookings?', answer: 'Yes. The backend records can surface booking status in an admin view.' }
    ],
    cta: {
      title: 'Ready to automate bookings?',
      description: 'We can help you build a booking flow that converts more inquiries into confirmed appointments.',
      primaryButton: 'Book Consultation',
      secondaryButton: 'Explore Services'
    }
  },
  'whatsapp-automation': {
    heroImage: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80',
    communicationDescription: 'Use WhatsApp as a responsive communication layer that handles inquiries, updates, and follow-ups without forcing users to change channels.',
    tabs: ['Support', 'Promotions', 'Reminders', 'Order updates', 'Lead nurturing'],
    scenarioImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLPXVvrZb89hahDsa48hpfy_ha8Rqb5eHRg&s',
    highlight: { value: '24/7', label: 'Always-on coverage' },
    faqTitle: 'Common questions',
    faqs: [
      { question: 'Is this using the official WhatsApp API?', answer: 'Yes. The workflow is designed around official WhatsApp Business capabilities.' },
      { question: 'Can we broadcast messages?', answer: 'Yes. You can send campaigns and updates to segmented audiences.' },
      { question: 'Does it support follow-ups?', answer: 'Yes. Follow-up and reminder messages can be automated from the backend.' },
      { question: 'Can it integrate with our tools?', answer: 'Yes. It can connect to CRM, ERP, and other backend systems.' }
    ],
    cta: {
      title: 'Ready to scale WhatsApp engagement?',
      description: 'We can help you set up a dependable WhatsApp automation workflow for support and sales.',
      primaryButton: 'Book Consultation',
      secondaryButton: 'Explore Services'
    }
  },
  'lead-management-dashboard': {
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    communicationDescription: 'Keep sales and support aligned with a shared dashboard that turns scattered lead activity into clear operational visibility.',
    tabs: ['Sales pipeline', 'Inbound inquiries', 'Event leads', 'Partner leads', 'Reactivation'],
    scenarioImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    highlight: { value: '1', label: 'Single source of truth' },
    faqTitle: 'Common questions',
    faqs: [
      { question: 'Can we see all leads in one place?', answer: 'Yes. The dashboard is built to give your team a unified lead view.' },
      { question: 'Can it show history and status?', answer: 'Yes. Records can include activity history, status, and notes.' },
      { question: 'Will it help route leads?', answer: 'Yes. You can automate assignment and prioritization rules.' },
      { question: 'Can it connect to existing tools?', answer: 'Yes. The dashboard can integrate with your existing data sources.' }
    ],
    cta: {
      title: 'Ready to centralize your lead flow?',
      description: 'We can help your team get a clearer view of every lead from one dashboard.',
      primaryButton: 'Book Consultation',
      secondaryButton: 'Explore Services'
    }
  },
  'website-app-development': {
    heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
    communicationDescription: 'Move from strategy to launch with a development process that keeps the product, UX, and backend aligned.',
    tabs: ['Marketing sites', 'SaaS products', 'Portals', 'Dashboards', 'Internal tools'],
    scenarioImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80',
    highlight: { value: 'Fast', label: 'Launch-ready builds' },
    faqTitle: 'Common questions',
    faqs: [
      { question: 'Do you build custom dashboards?', answer: 'Yes. We design internal and customer-facing dashboards based on your needs.' },
      { question: 'Can the app connect to our APIs?', answer: 'Yes. Backend integration is part of the service.' },
      { question: 'Do you handle both frontend and backend?', answer: 'Yes. The service is structured to support full product delivery.' },
      { question: 'Can you help us launch faster?', answer: 'Yes. We focus on production-ready workflows that support quicker release cycles.' }
    ],
    cta: {
      title: 'Ready to build your next product?',
      description: 'We can help you design and ship a website or app that fits your growth goals.',
      primaryButton: 'Book Consultation',
      secondaryButton: 'Explore Services'
    }
  },
  'business-automation-core': {
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
    communicationDescription: 'Bring customer data, workflows, and approvals into one automation layer that keeps the business moving.',
    tabs: ['Operations', 'Sales', 'Support', 'Finance', 'Admin'],
    scenarioImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
    highlight: { value: 'Hours', label: 'Saved every day' },
    faqTitle: 'Common questions',
    faqs: [
      { question: 'What can be automated?', answer: 'Any repetitive process with clear rules, triggers, or handoffs can be automated.' },
      { question: 'Do you integrate with CRMs?', answer: 'Yes. We can connect your business workflow to the systems you already use.' },
      { question: 'Can this replace manual admin work?', answer: 'Yes. The goal is to reduce repetitive work and free your team for higher-value tasks.' },
      { question: 'How do we get started?', answer: 'We map the process, define the rules, and then implement the automation layer.' }
    ],
    cta: {
      title: 'Ready to automate your business?',
      description: 'We can help you build a reliable automation foundation across operations, sales, and support.',
      primaryButton: 'Book Consultation',
      secondaryButton: 'Explore Services'
    }
  }
};

const buildDetail = (service) => {
  const template = detailTemplates[service.id] || detailTemplates['business-automation-core'];
  const features = Array.isArray(service.features) ? service.features : [];

  return {
    service: service._id,
    hero: {
      badge: service.isCore ? 'Core automation' : 'Intelligent solution',
      title: service.title,
      description: `${service.tagline}. Designed to turn routine work into a dependable workflow that scales with your team.`,
      image: template.heroImage
    },
    communication: {
      title: 'Effortless communication at scale',
      description: template.communicationDescription
    },
    capabilities: [
      {
        icon: 'MessageCircle',
        title: features[0] || 'Channel-specific workflows',
        body: `Use ${service.title} to make the first interaction faster and more useful for every customer.`
      },
      {
        icon: 'Settings',
        title: features[1] || 'Integration-ready automation',
        body: `Connect ${service.title} into the tools and systems your team already uses.`
      },
      {
        icon: 'TrendingUp',
        title: features[2] || 'Higher conversion outcomes',
        body: `Reduce friction and move more users from interest to action with less manual work.`
      },
      {
        icon: 'Users',
        title: 'Team collaboration',
        body: 'Give customer-facing teams a more predictable workflow and clearer handoff path.'
      },
      {
        icon: 'Bell',
        title: 'Automated notifications',
        body: 'Keep the right people informed when a process changes or needs attention.'
      },
      {
        icon: 'Zap',
        title: 'Fast operational turnaround',
        body: 'Replace slow, repetitive work with a process that responds instantly.'
      }
    ],
    results: {
      title: 'Quantifiable results for your team',
      description: `Measure the impact of ${service.title} through response speed, efficiency, and clearer customer movement through the funnel.`,
      highlight: template.highlight,
      cards: [
        { icon: 'Clock', title: 'Instant communication', body: 'Response times drop from hours to seconds.' },
        { icon: 'TrendingUp', title: 'Higher engagement', body: 'More users stay active when the workflow is immediate and relevant.' },
        { icon: 'Users', title: 'Reduced manual work', body: 'Your team handles exceptions, not repetitive requests.' },
        { icon: 'RefreshCw', title: 'Real-time updates', body: 'State changes sync automatically across your process.' },
        { icon: 'Activity', title: 'Better insights', body: 'Track what is working and where the workflow needs tuning.' },
        { icon: 'MessageCircle', title: 'Seamless integration', body: 'Connect the service to the systems you already trust.' }
      ]
    },
    steps: {
      title: 'Three steps to intelligence',
      items: [
        { icon: 'Link', title: `Connect ${service.title}`, body: 'Tie the service into your current channels and data sources.' },
        { icon: 'Settings', title: 'Configure the workflow', body: 'Set the rules, triggers, and handoff points that match your process.' },
        { icon: 'Zap', title: 'Automate at scale', body: 'Launch the flow and let it handle the repetitive work for you.' }
      ]
    },
    scenario: {
      title: 'Built for every scenario',
      tabs: template.tabs,
      image: template.scenarioImage,
      alt: `${service.title} scenario image`
    },
    faq: {
      title: template.faqTitle,
      items: template.faqs
    },
    cta: template.cta
  };
};

const seedServices = async () => {
  try {
    await connectDB();

    await Service.deleteMany({});
    await ServiceDetail.deleteMany({});

    const insertedServices = await Service.insertMany(seedData);
    const detailDocs = insertedServices.map((service) => buildDetail(service));
    const insertedDetails = await ServiceDetail.insertMany(detailDocs);

    const detailLookup = insertedDetails.reduce((lookup, detail) => {
      lookup[String(detail.service)] = detail;
      return lookup;
    }, {});

    await Promise.all(
      insertedServices.map((service) => {
        const detail = detailLookup[String(service._id)];

        if (!detail) {
          return Promise.resolve();
        }

        return Service.updateOne({ _id: service._id }, { $set: { serviceDetail: detail._id } });
      })
    );

    console.log('Services seeded successfully.');
    process.exit(0);
  } catch (error) {
    console.error(`Error seeding services: ${error.message}`);
    process.exit(1);
  }
};

seedServices();
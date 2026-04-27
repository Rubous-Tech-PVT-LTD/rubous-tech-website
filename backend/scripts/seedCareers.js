const mongoose = require('mongoose');
const Career = require('../models/Career');
const connectDB = require('../config/db');

const careers = [
  {
    id: 'frontend-developer-001',
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote / NYC',
    type: 'Full-time',
    experienceLevel: 'Mid-level',
    description: 'We are looking for a talented Frontend Developer to join our team and help build the next generation of automation tools. You will work closely with our design and backend teams to create intuitive, responsive user interfaces.',
    responsibilities: [
      'Develop and maintain responsive web applications using React and Tailwind CSS',
      'Collaborate with UX/UI designers to implement pixel-perfect designs',
      'Optimize applications for maximum speed and scalability',
      'Write clean, maintainable, and well-documented code',
      'Participate in code reviews and contribute to best practices'
    ],
    requirements: [
      '3+ years of experience with React and modern JavaScript',
      'Strong proficiency in HTML, CSS, and Tailwind CSS',
      'Experience with responsive design and cross-browser compatibility',
      'Familiarity with RESTful APIs and modern frontend build tools',
      'Excellent problem-solving and communication skills'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Flexible work arrangements (remote/hybrid options)',
      'Professional development budget',
      'Health, dental, and vision insurance',
      'Generous PTO and company holidays'
    ]
  },
  {
    id: 'backend-developer-002',
    title: 'Backend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experienceLevel: 'Senior',
    description: 'Join our backend team to build scalable, high-performance systems that power our automation platform. You will work on distributed systems, API design, and database optimization.',
    responsibilities: [
      'Design and implement RESTful APIs and microservices',
      'Develop and maintain database schemas and queries',
      'Optimize system performance and scalability',
      'Implement security best practices and data protection',
      'Collaborate with frontend teams to integrate APIs'
    ],
    requirements: [
      '4+ years of experience with Node.js and backend development',
      'Strong knowledge of PostgreSQL or similar relational databases',
      'Experience with cloud platforms (AWS, GCP, or Azure)',
      'Understanding of microservices architecture',
      'Experience with containerization and CI/CD pipelines'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Remote-first work culture',
      'Cutting-edge technology stack',
      'Comprehensive health benefits',
      'Learning and development opportunities'
    ]
  },
  {
    id: 'automation-engineer-003',
    title: 'Automation Engineer',
    department: 'Product',
    location: 'Remote / London',
    type: 'Full-time',
    experienceLevel: 'Mid-level',
    description: 'We are seeking an Automation Engineer to design and implement complex automation workflows. You will be responsible for creating the logic that powers our core automation platform.',
    responsibilities: [
      'Design and implement automation workflows and logic',
      'Ensure system reliability and performance optimization',
      'Collaborate with product teams to define automation requirements',
      'Troubleshoot and resolve complex technical issues',
      'Document automation processes and best practices'
    ],
    requirements: [
      '3+ years of experience in automation or workflow engineering',
      'Strong programming skills in Python or JavaScript',
      'Experience with workflow engines and business process automation',
      'Understanding of system integration and API design',
      'Excellent analytical and problem-solving skills'
    ],
    benefits: [
      'Competitive compensation package',
      'Flexible working hours and location',
      'Innovation-focused work environment',
      'Professional growth opportunities',
      'Health and wellness benefits'
    ]
  },
  {
    id: 'marketing-intern-004',
    title: 'Marketing Intern',
    department: 'Growth',
    location: 'Remote',
    type: 'Internship',
    experienceLevel: 'Entry-level',
    description: 'Join our marketing team as an intern and gain hands-on experience in content creation, social media management, and brand development for a growing tech company.',
    responsibilities: [
      'Create engaging content for social media platforms',
      'Assist with content strategy and calendar management',
      'Support marketing campaigns and initiatives',
      'Analyze social media metrics and performance',
      'Collaborate with team members on various marketing projects'
    ],
    requirements: [
      'Currently pursuing a degree in Marketing, Communications, or related field',
      'Strong writing and communication skills',
      'Familiarity with social media platforms and trends',
      'Creative mindset and attention to detail',
      'Basic understanding of digital marketing concepts'
    ],
    benefits: [
      'Hands-on experience in tech marketing',
      'Mentorship from experienced marketing professionals',
      'Flexible work schedule around academic commitments',
      'Potential for full-time opportunities',
      'Professional development and networking'
    ]
  }
];

const seedCareers = async () => {
  try {
    // Connect to database
    await connectDB();
    console.log('Database connected successfully');

    // Clear existing careers
    await Career.deleteMany({});
    console.log('Existing careers cleared');

    // Insert sample careers
    const insertedCareers = await Career.insertMany(careers);
    console.log(`${insertedCareers.length} careers seeded successfully:`);
    
    console.log('Sample careers:');
    insertedCareers.forEach((career, index) => {
      console.log(`${index + 1}. ${career.title} - ${career.department}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('Error seeding careers:', error);
    process.exit(1);
  }
};

// Run the seed function if called directly
if (require.main === module) {
  seedCareers();
}

module.exports = seedCareers;

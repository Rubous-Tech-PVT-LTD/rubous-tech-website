const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Team = require('../models/Team');
const connectDB = require('../config/db');

// Load env vars
dotenv.config();

const teamMembers = [
  {
    id: 'david-chen-001',
    name: 'David Chen',
    role: 'Chief Architect',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'Visionary architect with 15+ years of experience in building scalable systems.',
    email: 'david@ruboustech.com',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/davidchen',
      twitter: 'https://twitter.com/davidchen',
      github: 'https://github.com/davidchen'
    }
  },
  {
    id: 'sarah-jenkins-002',
    name: 'Sarah Jenkins',
    role: 'Head of Automation',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    bio: 'Expert in workflow automation and process optimization with 12+ years experience.',
    email: 'sarah@ruboustech.com',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sarahjenkins',
      twitter: 'https://twitter.com/sarahjenkins'
    }
  },
  {
    id: 'marcus-thorne-003',
    name: 'Marcus Thorne',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Full-stack developer specializing in modern web technologies and cloud infrastructure.',
    email: 'marcus@ruboustech.com',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/marcusthorne',
      github: 'https://github.com/marcusthorne'
    }
  },
  {
    id: 'elena-rodriguez-004',
    name: 'Elena Rodriguez',
    role: 'UX Orchestrator',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    bio: 'Creative designer focused on building intuitive user experiences and interfaces.',
    email: 'elena@ruboustech.com',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/elenarod',
      twitter: 'https://twitter.com/elenarod'
    }
  }
];

const seedTeam = async () => {
  try {
    // Connect to database
    await connectDB();
    console.log('Database connected successfully');

    // Clear existing team members
    await Team.deleteMany({});
    console.log('Existing team members cleared');

    // Insert sample team members
    const insertedMembers = await Team.insertMany(teamMembers);
    console.log(`${insertedMembers.length} team members seeded successfully:`);
    
    console.log('Sample team members:');
    insertedMembers.forEach((member, index) => {
      console.log(`${index + 1}. ${member.name} - ${member.role}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('Error seeding team:', error);
    process.exit(1);
  }
};

// Run the seed function if called directly
if (require.main === module) {
  seedTeam();
}

module.exports = seedTeam;
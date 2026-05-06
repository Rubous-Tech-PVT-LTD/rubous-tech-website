const mongoose = require('mongoose');
const Blog = require('../models/Blog');
const connectDB = require('../config/db');
require('dotenv').config();

const blogData = [
  {
    id: 'reducing-saas-churn',
    slug: 'reducing-saas-churn-with-predictive-ai-models',
    title: 'Reducing SaaS Churn with Predictive AI Models',
    description: 'Discover how machine learning can identify at-risk customers before they hit the cancel button.',
    content: [
      {
        type: 'heading',
        text: 'Reducing SaaS Churn with Predictive AI Models'
      },
      {
        type: 'paragraph',
        text: 'In today\'s competitive SaaS landscape, customer retention is more critical than ever. Companies that can predict and prevent churn before it happens gain a significant competitive advantage.'
      },
      {
        type: 'heading',
        text: 'The Challenge of Customer Churn'
      },
      {
        type: 'paragraph',
        text: 'Customer churn represents one of the biggest challenges for SaaS companies. When customers leave, they take their revenue with them, and acquiring new customers costs 5-25 times more than retaining existing ones.'
      },
      {
        type: 'heading',
        text: 'How AI Predictive Models Help'
      },
      {
        type: 'paragraph',
        text: 'Predictive AI models analyze customer behavior patterns to identify those at risk of churning. These models consider various factors:'
      },
      {
        type: 'paragraph',
        text: '- Usage patterns and frequency\n- Feature adoption rates\n- Support ticket history\n- Payment behavior\n- Engagement levels'
      },
      {
        type: 'heading',
        text: 'Implementation Strategies'
      },
      {
        type: 'paragraph',
        text: '1. **Data Collection**: Gather comprehensive customer interaction data\n2. **Model Training**: Use machine learning algorithms to identify patterns\n3. **Real-time Monitoring**: Continuously analyze customer behavior\n4. **Proactive Intervention**: Reach out to at-risk customers with targeted solutions'
      },
      {
        type: 'heading',
        text: 'Results and Benefits'
      },
      {
        type: 'paragraph',
        text: 'Companies implementing predictive churn reduction see:\n- 20-30% reduction in churn rates\n- Improved customer lifetime value\n- Better resource allocation for retention efforts\n- Enhanced customer satisfaction'
      },
      {
        type: 'heading',
        text: 'Conclusion'
      },
      {
        type: 'paragraph',
        text: 'Predictive AI models transform how SaaS companies approach customer retention, moving from reactive to proactive strategies that save revenue and improve customer relationships.'
      }
    ],
    tag: 'SaaS',
    category: 'AI Automation',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://i.pravatar.cc/80?img=32'
    },
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    isFeatured: true,
    displayOrder: 1
  },
  {
    id: 'whatsapp-api-global-support',
    slug: 'mastering-whatsapp-api-for-global-support',
    title: 'Mastering WhatsApp API for Global Support',
    description: 'Integrate your CRM directly into customer conversations for a seamless support experience.',
    content: [
      {
        type: 'heading',
        text: 'Mastering WhatsApp API for Global Support'
      },
      {
        type: 'paragraph',
        text: 'WhatsApp has become the preferred communication channel for businesses worldwide, with over 2 billion active users. Leveraging the WhatsApp API for customer support can transform your global service delivery.'
      },
      {
        type: 'heading',
        text: 'Why WhatsApp for Business Support?'
      },
      {
        type: 'paragraph',
        text: '- **Global Reach**: Available in 180+ countries\n- **High Engagement**: 98% of messages are read within 5 minutes\n- **Rich Media**: Support for images, documents, and interactive elements\n- **Automation Friendly**: Perfect for AI-powered customer service'
      },
      {
        type: 'heading',
        text: 'Integration Strategies'
      },
      {
        type: 'paragraph',
        text: '### 1. CRM Integration\nConnect your customer relationship management system to WhatsApp for:\n- Unified customer profiles\n- Conversation history tracking\n- Automated follow-ups'
      },
      {
        type: 'paragraph',
        text: '### 2. Multi-language Support\nImplement translation services to support customers in their preferred language.'
      },
      {
        type: 'paragraph',
        text: '### 3. Automated Responses\nSet up intelligent chatbots to handle common queries and route complex issues to human agents.'
      },
      {
        type: 'heading',
        text: 'Best Practices'
      },
      {
        type: 'paragraph',
        text: '1. **Opt-in Management**: Always get proper consent before messaging\n2. **Response Time**: Aim for sub-5-minute response times\n3. **Personalization**: Use customer data to personalize interactions\n4. **Analytics**: Track engagement metrics and optimize accordingly'
      },
      {
        type: 'heading',
        text: 'Implementation Roadmap'
      },
      {
        type: 'paragraph',
        text: '1. **Setup**: Configure WhatsApp Business API\n2. **Integration**: Connect with existing systems\n3. **Testing**: Pilot with a small customer segment\n4. **Scale**: Roll out to all customer segments\n5. **Optimize**: Continuously improve based on feedback'
      },
      {
        type: 'heading',
        text: 'Results'
      },
      {
        type: 'paragraph',
        text: 'Companies implementing WhatsApp API see:\n- 40% faster response times\n- 60% higher customer satisfaction\n- 35% reduction in support costs\n- 25% increase in customer retention'
      },
      {
        type: 'heading',
        text: 'Conclusion'
      },
      {
        type: 'paragraph',
        text: 'WhatsApp API integration is no longer optional for global businesses—it\'s essential for competitive advantage in customer service.'
      }
    ],
    tag: 'Workflow',
    category: 'Productivity',
    author: {
      name: 'Marcus Thorne',
      avatar: 'https://i.pravatar.cc/80?img=56'
    },
    readTime: '12 min read',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    isFeatured: false,
    displayOrder: 2
  },
  {
    id: 'ethics-automated-decision-making',
    slug: 'ethics-of-automated-decision-making',
    title: 'The Ethics of Automated Decision Making',
    description: 'Ensuring transparency and fairness in AI-driven HR and recruitment processes.',
    content: [
      {
        type: 'heading',
        text: 'The Ethics of Automated Decision Making'
      },
      {
        type: 'paragraph',
        text: 'As artificial intelligence becomes increasingly integrated into HR and recruitment processes, ensuring ethical implementation becomes paramount. Organizations must balance efficiency with fairness and transparency.'
      },
      {
        type: 'heading',
        text: 'The Ethical Dilemma'
      },
      {
        type: 'paragraph',
        text: 'Automated decision-making systems can process thousands of applications in minutes, but they also carry the risk of perpetuating biases and making opaque decisions that affect people\'s careers.'
      },
      {
        type: 'heading',
        text: 'Key Ethical Considerations'
      },
      {
        type: 'heading',
        text: '1. Bias and Fairness'
      },
      {
        type: 'paragraph',
        text: 'AI systems learn from historical data, which may contain existing biases. This can lead to:\n- Discriminatory hiring practices\n- Unfair candidate evaluation\n- Reinforcement of workplace inequalities'
      },
      {
        type: 'heading',
        text: '2. Transparency'
      },
      {
        type: 'paragraph',
        text: 'Candidates and employees have the right to understand:\n- How decisions are made\n- What factors are considered\n- How to appeal decisions'
      },
      {
        type: 'heading',
        text: '3. Privacy and Data Protection'
      },
      {
        type: 'paragraph',
        text: 'HR systems handle sensitive personal information requiring:\n- Secure data handling\n- Clear consent processes\n- Compliance with regulations (GDPR, CCPA)'
      },
      {
        type: 'heading',
        text: 'Implementing Ethical AI'
      },
      {
        type: 'heading',
        text: '1. Regular Audits'
      },
      {
        type: 'paragraph',
        text: 'Conduct frequent bias audits and fairness assessments to identify and correct issues.'
      },
      {
        type: 'heading',
        text: '2. Diverse Training Data'
      },
      {
        type: 'paragraph',
        text: 'Ensure training datasets represent diverse populations and avoid historical biases.'
      },
      {
        type: 'heading',
        text: '3. Human Oversight'
      },
      {
        type: 'paragraph',
        text: 'Maintain human review processes for critical decisions and provide appeal mechanisms.'
      },
      {
        type: 'heading',
        text: '4. Explainability'
      },
      {
        type: 'paragraph',
        text: 'Implement systems that can explain their decisions in understandable terms.'
      },
      {
        type: 'heading',
        text: 'Regulatory Compliance'
      },
      {
        type: 'paragraph',
        text: 'Stay compliant with:\n- Equal Employment Opportunity laws\n- Data protection regulations\n- Industry-specific guidelines\n- International standards'
      },
      {
        type: 'heading',
        text: 'Best Practices'
      },
      {
        type: 'paragraph',
        text: '1. **Document Everything**: Keep detailed records of system decisions and rationale\n2. **Regular Updates**: Continuously improve systems based on feedback and outcomes\n3. **Stakeholder Involvement**: Include diverse perspectives in system development\n4. **Transparency Reports**: Publish regular reports on AI system performance and impact'
      },
      {
        type: 'heading',
        text: 'The Future of Ethical AI'
      },
      {
        type: 'paragraph',
        text: 'As AI becomes more prevalent in HR, organizations must:\n- Invest in ethical AI training\n- Develop clear governance frameworks\n- Balance automation with human judgment\n- Prioritize fairness over pure efficiency'
      },
      {
        type: 'heading',
        text: 'Conclusion'
      },
      {
        type: 'paragraph',
        text: 'Ethical AI implementation isn\'t just about compliance—it\'s about building trust and creating fair, transparent systems that benefit both organizations and individuals.'
      }
    ],
    tag: 'Security',
    category: 'Productivity',
    author: {
      name: 'Elena Rodriguez',
      avatar: 'https://i.pravatar.cc/80?img=47'
    },
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    isFeatured: false,
    displayOrder: 3
  },
  {
    id: 'ai-customer-service',
    slug: 'ai-powered-customer-service-automation',
    title: 'AI-Powered Customer Service Automation',
    description: 'Transform your customer support with intelligent AI systems that handle 80% of inquiries automatically.',
    content: [
      {
        type: 'heading',
        text: 'AI-Powered Customer Service Automation'
      },
      {
        type: 'paragraph',
        text: 'Customer service is the backbone of any successful business. With AI automation, you can transform your support operations from reactive to proactive, delivering faster, more accurate responses while reducing costs.'
      },
      {
        type: 'heading',
        text: 'The Current Challenge'
      },
      {
        type: 'paragraph',
        text: 'Traditional customer service faces several challenges:\n- High operational costs\n- Inconsistent response quality\n- Limited availability (24/7 support)\n- Slow response times during peak hours\n- Agent burnout and turnover'
      },
      {
        type: 'heading',
        text: 'AI Automation Solutions'
      },
      {
        type: 'heading',
        text: '1. Intelligent Chatbots'
      },
      {
        type: 'paragraph',
        text: 'Modern AI chatbots can:\n- Understand natural language queries\n- Provide instant responses to common questions\n- Route complex issues to human agents\n- Learn from interactions to improve over time'
      },
      {
        type: 'heading',
        text: '2. Predictive Support'
      },
      {
        type: 'paragraph',
        text: 'AI systems can:\n- Anticipate customer needs based on behavior\n- Proactively address potential issues\n- Personalize responses using customer history\n- Scale support without adding headcount'
      },
      {
        type: 'heading',
        text: '3. Automated Triage'
      },
      {
        type: 'paragraph',
        text: 'Smart triage systems:\n- Categorize inquiries by urgency and type\n- Assign to the right agent automatically\n- Prioritize high-value customers\n- Ensure SLA compliance'
      },
      {
        type: 'heading',
        text: 'Implementation Strategy'
      },
      {
        type: 'heading',
        text: 'Phase 1: Assessment'
      },
      {
        type: 'paragraph',
        text: '- Analyze current support volume and patterns\n- Identify automation opportunities\n- Calculate potential ROI\n- Set success metrics'
      },
      {
        type: 'heading',
        text: 'Phase 2: Integration'
      },
      {
        type: 'paragraph',
        text: '- Connect with existing CRM systems\n- Train AI models on your data\n- Implement chatbot interfaces\n- Set up escalation protocols'
      },
      {
        type: 'heading',
        text: 'Phase 3: Optimization'
      },
      {
        type: 'paragraph',
        text: '- Monitor performance metrics\n- Refine AI responses\n- Expand automation scope\n- Train human agents for complex cases'
      },
      {
        type: 'heading',
        text: 'Results and Benefits'
      },
      {
        type: 'paragraph',
        text: 'Companies implementing AI customer service see:\n- 60% reduction in response time\n- 40% decrease in operational costs\n- 85% customer satisfaction improvement\n- 24/7 support availability\n- 3x agent productivity increase'
      },
      {
        type: 'heading',
        text: 'Best Practices'
      },
      {
        type: 'paragraph',
        text: '1. **Human-AI Collaboration**: Use AI for routine tasks, humans for complex issues\n2. **Continuous Training**: Regularly update AI models with new data\n3. **Customer Feedback**: Collect and analyze feedback to improve responses\n4. **Data Security**: Ensure customer data is protected and compliant'
      },
      {
        type: 'heading',
        text: 'Conclusion'
      },
      {
        type: 'paragraph',
        text: 'AI-powered customer service automation is no longer a luxury—it\'s a necessity for businesses that want to compete in today\'s fast-paced market. The right implementation can transform your customer experience while significantly reducing costs.'
      }
    ],
    tag: 'AI',
    category: 'AI Automation',
    author: {
      name: 'Dr. Michael Chen',
      avatar: 'https://i.pravatar.cc/80?img=15'
    },
    readTime: '10 min read',
    imageUrl: 'https://images.unsplash.com/photo-1531297489412-8a9ac3dcdd5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    isFeatured: false,
    displayOrder: 4
  },
  {
    id: 'saas-metrics-guide',
    slug: 'essential-saas-metrics-every-founder-should-track',
    title: 'Essential SaaS Metrics Every Founder Should Track',
    description: 'Master the key performance indicators that drive SaaS growth and investor confidence.',
    content: [
      {
        type: 'heading',
        text: 'Essential SaaS Metrics Every Founder Should Track'
      },
      {
        type: 'paragraph',
        text: 'Understanding your SaaS metrics is crucial for making informed decisions, attracting investors, and driving sustainable growth. This guide covers most important metrics you need to track.'
      },
      {
        type: 'heading',
        text: 'Revenue Metrics'
      },
      {
        type: 'heading',
        text: '1. Monthly Recurring Revenue (MRR)'
      },
      {
        type: 'paragraph',
        text: 'MRR is the lifeblood of any SaaS business. It represents predictable revenue from subscriptions.\n\n**Calculation**: Sum of all monthly subscription revenue\n**Why Important**: Shows predictable income and business health\n**Healthy Growth**: 10-20% month-over-month growth'
      },
      {
        type: 'heading',
        text: '2. Annual Recurring Revenue (ARR)'
      },
      {
        type: 'paragraph',
        text: 'ARR is MRR multiplied by 12, representing annualized revenue.\n\n**Why Important**: Used for valuation and long-term planning\n**Investor Focus**: Primary metric for SaaS valuations'
      },
      {
        type: 'heading',
        text: '3. Average Revenue Per User (ARPU)'
      },
      {
        type: 'paragraph',
        text: 'ARPU measures the average revenue generated per customer.\n\n**Calculation**: Total Revenue ÷ Number of Customers\n**Benchmark**: Varies by industry, typically $50-500/month'
      },
      {
        type: 'heading',
        text: 'Customer Metrics'
      },
      {
        type: 'heading',
        text: '4. Customer Acquisition Cost (CAC)'
      },
      {
        type: 'paragraph',
        text: 'CAC measures how much it costs to acquire a new customer.\n\n**Calculation**: Total Sales & Marketing Costs ÷ Number of New Customers\n**Healthy Ratio**: CAC should be recovered within 12 months'
      },
      {
        type: 'heading',
        text: '5. Customer Lifetime Value (LTV)'
      },
      {
        type: 'paragraph',
        text: 'LTV represents the total revenue a customer generates over their lifetime.\n\n**Calculation**: ARPU × Average Customer Lifespan\n**Golden Rule**: LTV should be 3x CAC'
      },
      {
        type: 'heading',
        text: '6. Churn Rate'
      },
      {
        type: 'paragraph',
        text: 'Churn rate measures customer attrition over time.\n\n**Calculation**: (Customers Lost ÷ Total Customers) × 100\n**Healthy Rate**: <5% monthly for B2B, <10% for B2C'
      },
      {
        type: 'heading',
        text: 'Engagement Metrics'
      },
      {
        type: 'heading',
        text: '7. Monthly Active Users (MAU)'
      },
      {
        type: 'paragraph',
        text: 'MAU tracks how many unique users engage with your product monthly.\n\n**Why Important**: Shows product-market fit and user engagement\n**Growth Indicator**: Consistent MAU growth indicates healthy adoption'
      },
      {
        type: 'heading',
        text: '8. Daily Active Users (DAU)'
      },
      {
        type: 'paragraph',
        text: 'DAU measures daily engagement and product stickiness.\n\n**DAU/MAU Ratio**: 20-40% is considered healthy for most SaaS products'
      },
      {
        type: 'heading',
        text: 'Financial Metrics'
      },
      {
        type: 'heading',
        text: '9. Gross Margin'
      },
      {
        type: 'paragraph',
        text: 'Gross margin shows profitability after direct costs.\n\n**Calculation**: (Revenue - COGS) ÷ Revenue × 100\n**SaaS Standard**: 80-90% gross margin is typical'
      },
      {
        type: 'heading',
        text: '10. Burn Rate'
      },
      {
        type: 'paragraph',
        text: 'Burn rate measures how quickly you\'re spending cash.\n\n**Why Important**: Determines runway and funding needs\n**Calculation**: Monthly Expenses - Monthly Revenue'
      },
      {
        type: 'heading',
        text: 'Implementation Tips'
      },
      {
        type: 'heading',
        text: '1. Set Up Tracking Early'
      },
      {
        type: 'paragraph',
        text: '- Implement analytics from day one\n- Create dashboards for key metrics\n- Establish reporting frequency'
      },
      {
        type: 'heading',
        text: '2. Focus on Trends'
      },
      {
        type: 'paragraph',
        text: '- Look at month-over-month changes\n- Compare against industry benchmarks\n- Identify leading indicators'
      },
      {
        type: 'heading',
        text: '3. Automate Reporting'
      },
      {
        type: 'paragraph',
        text: '- Use tools like ChartMogul or Baremetrics\n- Set up automated alerts for metric changes\n- Create investor-ready reports'
      },
      {
        type: 'heading',
        text: 'Common Pitfalls to Avoid'
      },
      {
        type: 'paragraph',
        text: '1. **Vanity Metrics**: Don\'t focus on metrics that don\'t impact revenue\n2. **Analysis Paralysis**: Too many metrics can be overwhelming\n3. **Ignoring Context**: Metrics need industry and stage context\n4. **One-Time Analysis**: Metrics should be tracked consistently'
      },
      {
        type: 'heading',
        text: 'Conclusion'
      },
      {
        type: 'paragraph',
        text: 'Mastering these SaaS metrics will help you make data-driven decisions, impress investors, and build a sustainable business. Start with the basics and expand your tracking as your company grows.\n\nRemember: What gets measured gets managed.'
      }
    ],
    tag: 'SaaS',
    category: 'Business Growth',
    author: {
      name: 'Sarah Thompson',
      avatar: 'https://i.pravatar.cc/80?img=23'
    },
    readTime: '12 min read',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    isFeatured: false,
    displayOrder: 5
  },
  {
    id: 'workflow-automation-tools',
    slug: 'top-10-workflow-automation-tools-for-2024',
    title: 'Top 10 Workflow Automation Tools for 2024',
    description: 'Discover the best automation tools that can transform your business processes and boost productivity.',
    content: [
      {
        type: 'heading',
        text: 'Top 10 Workflow Automation Tools for 2024'
      },
      {
        type: 'paragraph',
        text: 'Workflow automation is no longer optional—it\'s essential for businesses that want to stay competitive. Here are the top 10 tools that can transform your operations in 2024.'
      },
      {
        type: 'heading',
        text: '1. Zapier'
      },
      {
        type: 'paragraph',
        text: '**Best For**: Connecting apps without coding\n**Key Features**: 3,000+ app integrations, multi-step workflows\n**Pricing**: Free plan available, paid plans from $19.99/month\n**Use Case**: Automating data transfer between CRM and email marketing'
      },
      {
        type: 'heading',
        text: '2. Make (formerly Integromat)'
      },
      {
        type: 'paragraph',
        text: '**Best For**: Complex automation scenarios\n**Key Features**: Visual workflow builder, advanced logic\n**Pricing**: Free tier, paid plans from $9/month\n**Use Case**: Multi-app data synchronization with conditional logic'
      },
      {
        type: 'heading',
        text: '3. Microsoft Power Automate'
      },
      {
        type: 'paragraph',
        text: '**Best For**: Microsoft ecosystem users\n**Key Features**: Deep Office 365 integration, RPA capabilities\n**Pricing**: Included with Microsoft 365, premium plans available\n**Use Case**: Automating document workflows and approvals'
      },
      {
        type: 'heading',
        text: '4. Airtable'
      },
      {
        type: 'paragraph',
        text: '**Best For**: Database-driven workflows\n**Key Features**: Custom databases, automation rules\n**Pricing**: Free tier, paid plans from $10/user/month\n**Use Case**: Project management with automated task creation'
      },
      {
        type: 'heading',
        text: '5. HubSpot Automation'
      },
      {
        type: 'paragraph',
        text: '**Best For**: Marketing and sales workflows\n**Key Features**: CRM integration, lead scoring\n**Pricing**: Free tools, paid plans from $45/month\n**Use Case**: Automated lead nurturing and customer onboarding'
      },
      {
        type: 'heading',
        text: '6. Jira Automation'
      },
      {
        type: 'paragraph',
        text: '**Best For**: Software development workflows\n**Key Features**: Issue tracking, CI/CD integration\n**Pricing**: Free for small teams, paid from $7.50/user/month\n**Use Case**: Automated bug tracking and deployment workflows'
      },
      {
        type: 'heading',
        text: '7. Asana Automation'
      },
      {
        type: 'paragraph',
        text: '**Best For**: Project management workflows\n**Key Features**: Task dependencies, timeline automation\n**Pricing**: Free tier, paid plans from $10.99/user/month\n**Use Case**: Automated project updates and resource allocation'
      },
      {
        type: 'heading',
        text: '8. Trello Automation (Butler)'
      },
      {
        type: 'paragraph',
        text: '**Best For**: Simple visual workflows\n**Key Features**: Card-based automation, easy setup\n**Pricing**: Included in Business Class ($10/user/month)\n**Use Case**: Automated task movement and notifications'
      },
      {
        type: 'heading',
        text: '9. Slack Workflow Builder'
      },
      {
        type: 'paragraph',
        text: '**Best For**: Team communication automation\n**Key Features**: Message automation, app integrations\n**Pricing**: Included in paid plans\n**Use Case**: Automated meeting reminders and status updates'
      },
      {
        type: 'heading',
        text: '10. Google Apps Script'
      },
      {
        type: 'paragraph',
        text: '**Best For**: Google Workspace users\n**Key Features**: Custom automation scripts\n**Pricing**: Free with Google Workspace\n**Use Case**: Automated Google Sheets reporting and Gmail filtering'
      }
    ],
    tag: 'Automation',
    category: 'Productivity',
    author: {
      name: 'Alex Rodriguez',
      avatar: 'https://i.pravatar.cc/80?img=8'
    },
    readTime: '15 min read',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    isFeatured: false,
    displayOrder: 6
  }
];

const seedBlogs = async () => {
  try {
    await connectDB();

    // Clear existing blogs
    await Blog.deleteMany({});
    console.log('Database cleared');
    
    // Insert new blogs
    await Blog.insertMany(blogData);
    console.log('Blogs inserted successfully');
    
    // Verify only one featured article
    const featuredCount = await Blog.countDocuments({ isFeatured: true });
    console.log('Featured articles count: ' + featuredCount);
    
    console.log('Blogs seeded successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding blogs: ' + error.message);
    process.exit(1);
  }
};

seedBlogs();
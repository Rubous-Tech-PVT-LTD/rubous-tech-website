const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, 'Please add a blog id'],
      unique: true,
      lowercase: true,
      trim: true
    },
    title: {
      type: String,
      required: [true, 'Please add a blog title'],
      trim: true,
      maxlength: [200, 'Title cannot be more than 200 characters']
    },
    slug: {
      type: String,
      required: [true, 'Please add a blog slug'],
      lowercase: true,
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Please add a blog description'],
      trim: true,
      maxlength: [500, 'Description cannot be more than 500 characters']
    },
    content: {
      type: String,
      required: [true, 'Please add blog content'],
      trim: true
    },
    tag: {
      type: String,
      required: [true, 'Please add a blog tag'],
      trim: true,
      enum: ['SaaS', 'Workflow', 'Security', 'AI', 'Automation', 'Productivity', 'Compliance']
    },
    category: {
      type: String,
      required: [true, 'Please add a blog category'],
      trim: true,
      enum: ['AI Automation', 'Productivity', 'SaaS', 'Workflow Systems', 'Business Growth']
    },
    author: {
      name: {
        type: String,
        required: [true, 'Please add author name'],
        trim: true
      },
      avatar: {
        type: String,
        required: [true, 'Please add author avatar URL'],
        trim: true
      }
    },
    readTime: {
      type: String,
      required: [true, 'Please add read time'],
      trim: true
    },
    imageUrl: {
      type: String,
      required: [true, 'Please add image URL'],
      trim: true
    },
    publishedAt: {
      type: Date,
      default: Date.now
    },
    isPublished: {
      type: Boolean,
      default: true
    },
    isFeatured: {
      type: Boolean,
      default: false
    },
    displayOrder: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

// Create indexes for better performance
BlogSchema.index({ slug: 1 });
BlogSchema.index({ tag: 1 });
BlogSchema.index({ category: 1 });
BlogSchema.index({ isPublished: 1 });
BlogSchema.index({ isFeatured: 1 });
BlogSchema.index({ publishedAt: -1 });
BlogSchema.index({ isPublished: 1, publishedAt: -1 });
BlogSchema.index({ isPublished: 1, tag: 1 });
BlogSchema.index({ isPublished: 1, category: 1 });

// Text index for search functionality
BlogSchema.index({
  title: 'text',
  description: 'text',
  content: 'text'
}, {
  weights: {
    title: 10,
    description: 5,
    content: 1
  },
  name: 'blog_text_search'
});

module.exports = mongoose.model('Blog', BlogSchema);

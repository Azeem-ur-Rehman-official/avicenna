// models/Blog.js

import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  blogCategory: {
    type: String,
    required: true,
  },
  html: {
    type: [String],
    required: true,
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft',
  },
}, {
  timestamps: true,
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

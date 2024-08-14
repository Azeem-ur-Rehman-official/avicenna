// models/Blog.js

import mongoose from "mongoose";

const GallaryScheme = new mongoose.Schema({
  image: { url: String, public_id: String },

  blogCategoryId: {
    type: String,
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Gallary ||
  mongoose.model("Gallary", GallaryScheme);

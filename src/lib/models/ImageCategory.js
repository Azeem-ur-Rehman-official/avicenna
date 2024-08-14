const mongoose = require("mongoose");

const ImageCategorySchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.ImageCategory ||
  mongoose.model("ImageCategory", ImageCategorySchema);

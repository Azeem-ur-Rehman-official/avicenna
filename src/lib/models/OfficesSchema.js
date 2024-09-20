const mongoose = require("mongoose");

const OfficesSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  }

});

export default mongoose.models.Offices ||
  mongoose.model("Offices", OfficesSchema);

import mongoose from "mongoose";

const dishShema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  addons: { type: Array, required: true },
  price: {
    type: String,
    required: true,
  },
  createdon: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("dishes", dishShema);

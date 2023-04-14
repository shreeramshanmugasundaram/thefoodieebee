import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  categoryname: {
    type: String,
    required: true,
  },
});

export default mongoose.model("category", categorySchema);

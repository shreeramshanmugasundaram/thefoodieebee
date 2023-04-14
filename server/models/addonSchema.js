import mongoose from "mongoose";

const addonSchema = mongoose.Schema({
  addonname: {
    type: String,
    required: true,
  },
  addonprice: {
    type: String,
    required: true,
  },
});

export default mongoose.model("addons", addonSchema);

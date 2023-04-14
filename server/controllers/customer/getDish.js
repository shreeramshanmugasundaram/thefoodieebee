import DishesList from "../../models/dishSchema.js";
import AddonList from "../../models/addonSchema.js";
import CategoryList from "../../models/categorySchema.js";
const getDish = async (req, res) => {
  try {
    const { _id } = req.body;
    if (!_id) {
      return res.status(200).json({ message: "empty request" });
    }
    let dish = await DishesList.findOne({ _id });
    const { name, description, type, addons, price } = dish;
    const addonlist = await AddonList.find({ _id: { $in: addons } });
    return res.status(201).json({ name, description, type, addonlist, price });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: "Something went wrong, Please try later" });
  }
};
export default getDish;

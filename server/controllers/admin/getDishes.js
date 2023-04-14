import DishesList from "../../models/dishSchema.js";
import AddonList from "../../models/addonSchema.js";
import CategoryList from "../../models/categorySchema.js";
const getDishes = async (req, res) => {
  try {
    let alldishes = await DishesList.find().sort({ createdon: -1 });
    for (const index in alldishes) {
      const idsArray = alldishes[index].addons;
      const addonlist = await AddonList.find({ _id: { $in: idsArray } });
      alldishes[index].addons = addonlist;

      const categorylist = await CategoryList.find({
        _id: alldishes[index].category,
      });
      alldishes[index].category = categorylist[0].categoryname;
    }

    return res.status(201).json(alldishes);
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: "Something went wrong, Please try later" });
  }
};
export default getDishes;

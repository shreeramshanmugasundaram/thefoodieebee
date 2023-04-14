import AddonList from "../../models/addonSchema.js";

const getAddon = async (req, res) => {
  try {
    const alladdons = await AddonList.find();
    console.log(alladdons);

    return res.status(201).json(alladdons);
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: "Something went wrong, Please try later" });
  }
};
export default getAddon;

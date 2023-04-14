import AddonList from "../../models/addonSchema.js";

const createNewAddon = async (req, res) => {
  try {
    const { addonname, addonprice } = req.body;
    if (!addonname || !addonprice) {
      return res
        .status(400)
        .json({ message: "Please fill all the required inputs " });
    }

    console.log(addonname, addonprice);
    const existingUser = await AddonList.findOne({ addonname });
    if (existingUser) {
      return res.status(400).json({ message: "Addon already Exist." });
    }

    const result = await AddonList.create({
      addonname,
      addonprice,
    });

    return res.status(201).json({
      message: "Addon Created Successfully",
    });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: "Something went wrong, Please try later" });
  }
};
export default createNewAddon;

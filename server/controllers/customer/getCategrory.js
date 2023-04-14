import DishesList from "../../models/dishSchema.js";

const getCategory = async (req, res) => {
  try {
    const { _id } = req.body;
    let alldishes = await DishesList.find({ category: _id });
    let finalDishesList = [];
    for (let index in alldishes) {
      const { _id, name, description, price, type } = alldishes[index];
      finalDishesList.push({ _id, name, description, price, type });
    }
    return res.status(201).json({ finalDishesList });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Something went wrong, Please try later" });
  }
};
export default getCategory;

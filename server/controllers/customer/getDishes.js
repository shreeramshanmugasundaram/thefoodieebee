import DishesList from "../../models/dishSchema.js";
const getDishes = async (req, res) => {
  try {
    let alldishes = await DishesList.find().sort({ createdon: -1 });
    let finalDishesList = [];
    for (let index in alldishes) {
      const { _id, name, description, price, type } = alldishes[index];
      finalDishesList.push({ _id, name, description, price, type });
    }
    return res.status(201).json(finalDishesList);
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: "Something went wrong, Please try later" });
  }
};
export default getDishes;

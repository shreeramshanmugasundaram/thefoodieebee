import DishesList from "../../models/dishSchema.js";
const getVeg = async (req, res) => {
  try {
    const { type } = req.body;
    let alldishes = [];
    if (type === "all") {
      alldishes = await DishesList.find();
    } else {
      alldishes = await DishesList.find({ type: type });
    }

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
export default getVeg;

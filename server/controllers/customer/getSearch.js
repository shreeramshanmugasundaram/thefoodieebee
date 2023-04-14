import DishesList from "../../models/dishSchema.js";
const getSearch = async (req, res) => {
  try {
    const { name } = req.body;
    let alldishes = await DishesList.find(
      name !== ""
        ? { name: { $regex: name, $options: "i" } }
        : { name: { $regex: "" } }
    );
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
export default getSearch;

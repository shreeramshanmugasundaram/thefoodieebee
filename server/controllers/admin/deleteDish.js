import DishList from "../../models/dishSchema.js";

const deleteDish = async (req, res) => {
  try {
    const { _id } = req.body;
    console.log(_id);
    const deleted = await DishList.deleteOne({ _id });
    return res.status(201).json({ message: "Dish Deleted Successfully" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: "Something went wrong, Please try later" });
  }
};
export default deleteDish;

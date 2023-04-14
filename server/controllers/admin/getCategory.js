import CategoryList from "../../models/categorySchema.js";

const getCategory = async (req, res) => {
  try {
    const allcategory = await CategoryList.find();
    console.log(allcategory);
    return res.status(201).json(allcategory);
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: "Something went wrong, Please try later" });
  }
};
export default getCategory;

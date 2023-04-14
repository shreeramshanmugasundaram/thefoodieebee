import CategoryList from "../../models/categorySchema.js";
import fs from "fs";
const createNewCategory = async (req, res) => {
  try {
    const { categoryname } = req.body;
    if (!categoryname) {
      return res
        .status(400)
        .json({ message: "Please fill all the required inputs " });
    }

    const existingUser = await CategoryList.findOne({ categoryname });
    if (existingUser) {
      return res.status(400).json({ message: "Category already Exist." });
    }

    const result = await CategoryList.create({
      categoryname,
    });
    const file = req.file;
    const newfilename = `images/category/${result._id}.webp`;
    fs.renameSync(file.path, newfilename);

    return res.status(201).json({
      message: "Categroy Created Successfully",
    });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: "Something went wrong, Please try later" });
  }
};
export default createNewCategory;

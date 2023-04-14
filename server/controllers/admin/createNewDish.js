import jwt from "jsonwebtoken";
import dishList from "../../models/dishSchema.js";
import fs from "fs";

const createNewDish = async (req, res) => {
  try {
    const token = await req.headers?.authorization;
    const decodedToken = await jwt.verify(token, process.env.JSONTOKEN);
    const file = req.file;

    const { name, description, type, category, addons, price } = req.body;
    if (
      !name ||
      !description ||
      !type ||
      !category ||
      !addons ||
      !price ||
      !file?.path
    ) {
      return res
        .status(400)
        .json({ message: "Please fill all the required inputs " });
    }
    const existingDish = await dishList.findOne({ name });
    if (existingDish) {
      return res.status(400).json({ message: "Dish already Exist." });
    }
    const splitaddon = addons.split(",");

    const result = await dishList.create({
      name,
      description,
      type,
      category,
      addons: splitaddon,
      price,
    });
    const newfilename = `images/dish/${result._id}.webp`;
    fs.renameSync(file.path, newfilename);

    return res.status(201).json({
      result: result._id,
      message: "Dish Created Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: " You are unauthorized" });
  }
};
export default createNewDish;

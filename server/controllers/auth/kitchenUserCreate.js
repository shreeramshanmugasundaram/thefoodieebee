import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userList from "../../models/kitchenUserSchema.js";

const kitchenUserCreate = async (req, res) => {
  try {
    const { kitchenusername, kitchenuserpassword } = req.body;
    console.log(kitchenusername, kitchenuserpassword);
    if (!kitchenusername || !kitchenuserpassword) {
      return res
        .status(400)
        .json({ message: "Please fill all the required inputs " });
    }
    const existingUser = await userList.findOne({ username: kitchenusername });
    console.log(existingUser);
    if (existingUser) {
      return res.status(400).json({ message: "User already Exist." });
    }

    const hashedPassword = await bcrypt.hash(kitchenuserpassword, 12);

    const result = await userList.create({
      username: kitchenusername,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Account Created Successfully",
    });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: "Something went wrong, Please try later" });
  }
};
export default kitchenUserCreate;

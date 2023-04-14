import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userList from "../../models/adminUserSchema.js";

const userCreate = async (req, res) => {
  console.log(req.body);
  try {
    const { username, password, cpassword } = req.body;
    if (!username || !password || !cpassword) {
      return res
        .status(400)
        .json({ message: "Please fill all the required inputs " });
    }
    if (password !== cpassword) {
      return res.status(400).json({ message: "Password does not match" });
    }
    const existingUser = await userList.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already Exist." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await userList.create({
      username,
      password: hashedPassword,
    });

    const jsonKey = process.env.JSONTOKEN;
    const token = jwt.sign({ phone: result.phone, id: result._id }, jsonKey, {
      expiresIn: "24h",
    });

    return res.status(201).json({
      result: { username },
      token,
      message: "Account Created Successfully",
    });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: "Something went wrong, Please try later" });
  }
};
export default userCreate;

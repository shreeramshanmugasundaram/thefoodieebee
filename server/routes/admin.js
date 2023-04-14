import express from "express";
// import newDishAuth from "../middleware/newDishAuth.js";
import multer from "multer";

const upload = multer({ dest: "images/dish" });
const upload1 = multer({ dest: "images/category" });

const router = express();

//Importing Function from Controllers for Routes
import adminUserLogin from "../controllers/auth/adminUserLogin.js";
import adminUserCreate from "../controllers/auth/adminUserCreate.js";
import kitchenUserLogin from "../controllers/auth/kitchenUserLogin.js";
import kitchenUserCreate from "../controllers/auth/kitchenUserCreate.js";
import createNewDish from "../controllers/admin/createNewDish.js";
import createNewAddon from "../controllers/admin/createNewAddon.js";
import createNewCategory from "../controllers/admin/createNewCategory.js";
import getAddon from "../controllers/admin/getaddons.js";
import getCategory from "../controllers/admin/getCategory.js";
import getDishes from "../controllers/admin/getDishes.js";
import deleteDish from "../controllers/admin/deleteDish.js";

import auth from "../middleware/auth.js";
//Importing Middleware

//All Routes
router.post("/login", adminUserLogin);
router.post("/create9970116791", adminUserCreate);
router.post("/createkitchenuser", kitchenUserCreate);
router.post("/loginkitchenuser", kitchenUserLogin);

router.post("/createnewdish", upload.single("image"), createNewDish);
router.post("/addaddons", auth, createNewAddon);
router.post("/addcategory", upload1.single("image"), createNewCategory);

// get requests
router.get("/addons", auth, getAddon);
router.get("/categories", auth, getCategory);
router.get("/dishes", auth, getDishes);
// delete Request
router.post("/deletedish", auth, deleteDish);
router.get("/auth", auth, (req, res) => {
  res.json({ message: "you are authorized" });
});

export default router;

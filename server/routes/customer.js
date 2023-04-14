import express from "express";
import getDishes from "../controllers/customer/getDishes.js";
import getDish from "../controllers/customer/getDish.js";
import getCategories from "../controllers/customer/getCategroies.js";
import getCategory from "../controllers/customer/getCategrory.js";
import getVeg from "../controllers/customer/getVeg.js";
import getSearch from "../controllers/customer/getSearch.js";

const router = express();

router.get("/dishes", getDishes);
router.post("/dish", getDish);
router.get("/categories", getCategories);
router.post("/category", getCategory);
router.post("/veg", getVeg);
router.post("/search", getSearch);
export default router;

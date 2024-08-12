const express = require("express");
const {
  addNewFoodItem,
  getAllFood,
  deleteFoodItems,
  updateFoodItems,
} = require("../controllers/foodController");

const router = express.Router();

//POST a new food item
router.post("/add", addNewFoodItem);

//GET all food items
router.get("/getall", getAllFood);

//UPDATE a food item
router.patch("/:id", updateFoodItems);

//DELETE a food item
router.delete("/:id", deleteFoodItems);

module.exports = router;

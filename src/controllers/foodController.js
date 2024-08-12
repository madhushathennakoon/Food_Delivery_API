const foodModel = require("../models/foodModel");
const mongoose = require("mongoose");
const {
  addNewFoodSchema,
  updateFoodSchema,
} = require("../helpers/validation_schema");

//Add New Food Item
const addNewFoodItem = async (req, res) => {
  try {
    // validating request body
    const validateBody = await addNewFoodSchema.validateAsync(req.body);
    const newFood = await foodModel.create({
      name: validateBody.name,
      desc: validateBody.desc,
      category: validateBody.category,
      price: validateBody.price,
      imageUrl: validateBody.imageUrl,
    });
    res.status(201).json(newFood);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get All Food Items
const getAllFood = async (req, res) => {
  try {
    const allFood = await foodModel.find().sort({ createdAt: -1 });
    res.status(200).json(allFood);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Update Food Item
const updateFoodItems = async (req, res) => {
  try {
    // validating request body
    const validateBody = await updateFoodSchema.validateAsync(req.body);

    const updateFoodItem = await foodModel.findByIdAndUpdate(
      req.params.id,
      validateBody,
      {
        new: true,
      }
    );

    res.status(200).json(updateFoodItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Delete Food Item
const deleteFoodItems = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such food item" });
    }

    const deleteFoodItem = await foodModel.findByIdAndDelete({
      _id: id,
    });

    if (!deleteFoodItem) {
      return res.status(404).json({ error: "No such food item" });
    }

    res.status(200).json(deleteFoodItem);
  } catch (error) {
    res.status(500).json({ error: "No such food item" });
  }
};

module.exports = {
  addNewFoodItem,
  getAllFood,
  deleteFoodItems,
  updateFoodItems,
};

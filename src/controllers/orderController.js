const orderModel = require("../models/orderModel");

const validator = require("validator");

//Place Order
const placeOrder = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      street,
      city,
      state,
      zip_code,
      country,
      phone,
      nameQty,
      total,
    } = req.body;

    //Validation
    if (
      !first_name ||
      !last_name ||
      !email ||
      !street ||
      !city ||
      !state ||
      !zip_code ||
      !country ||
      !phone
    ) {
      return res.status(400).json({
        status: "fail",
        message: "All field must be filled",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        status: "fail",
        message: "Email is not valid",
      });
    }

    //Place order in database
    const order = await orderModel.create({
      first_name,
      last_name,
      email,
      street,
      city,
      state,
      zip_code,
      country,
      phone,
      nameQty,
      total,
    });

    return res.status(201).json({ order });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

//Get All Orders
const getAllOrders = async (req, res) => {
  try {
    const allOrders = await orderModel.find().sort({ createdAt: -1 });
    res.status(200).json(allOrders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { placeOrder, getAllOrders };

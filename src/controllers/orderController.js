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
    });

    return res.status(201).json({ order });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

module.exports = placeOrder;

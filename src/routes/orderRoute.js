const express = require("express");
const placeOrder = require("../controllers/orderController");

const router = express.Router();

//PLACE a new order
router.post("/place", placeOrder);

module.exports = router;

const express = require("express");
const { placeOrder, getAllOrders } = require("../controllers/orderController");

const router = express.Router();

//PLACE a new order
router.post("/place", placeOrder);

//GET all orders
router.get("/getall", getAllOrders);

module.exports = router;

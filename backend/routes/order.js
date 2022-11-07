const router = require("express").Router();
const CartModal = require("../models/Cart");
const OrderModal = require("../models/Orders");

router.post("/add-items-order-table", async (req, res) => {
  const { userId } = req.body;
  try {
    const cart = await CartModal.findOne({
      userid: userId,
    });

    const products = cart?.products;
    const orderedProducts = await OrderModal.findOne({
      userid: userId,
    });

    if (!orderedProducts) {
      await OrderModal.create({
        userid: userId,
        orders: products ? [...products] : [],
      });
    } else {
      orderedProducts.orders = [...orderedProducts.orders, ...products];
    }

    console.log("Updated Products are", orderedProducts.orders);

    res.status(200).json({
      msg: "Order placed successfully!",
      orders: orderedProducts.orders,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;

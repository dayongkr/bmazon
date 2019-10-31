const express = require('express');

const db = require('../models');
const { isLoggedIn } = require('./middleware');

const router = express.Router();

router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const newCart = await db.Cart.create({
      asin: req.body.asin,
      count: req.body.count,
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      UserId: req.user.id,
    });
    res.json(newCart);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

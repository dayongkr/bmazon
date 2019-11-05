const express = require('express');

const db = require('../models');
const { isLoggedIn } = require('./middleware');

const router = express.Router();

router.get('/', isLoggedIn, async (req, res, next) => {
  try {
    const cartData = await db.Cart.findAll({
      where: {
        UserId: req.user.id,
      },
    });
    return res.json(cartData);
  } catch (e) {
    next(e);
  }
});

router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    await db.Cart.findOrCreate({
      where: { UserId: req.user.id, asin: req.body.asin },
      defaults: {
        count: req.body.count,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
      },
    }).spread((cart, created) => {
      if (created) {
        res.json(cart);
      } else {
        res.status(401).send('장바구니에 이미 존재합니다');
      }
    });
  } catch (e) {
    next(e);
  }
});

router.delete('/:asin', isLoggedIn, async (req, res, next) => {
  try {
    await db.Cart.destroy({
      where: { UserId: req.user.id, asin: req.params.asin },
    });
    res.send(`${req.params.asin} 삭제 성공`);
  } catch (e) {
    res.status(401).send('삭제 실패');
    next(e);
  }
});

module.exports = router;

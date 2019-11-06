const express = require('express');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body);
    res.send('OK');
  } catch (e) {
    next(e);
  }
});

module.exports = router;

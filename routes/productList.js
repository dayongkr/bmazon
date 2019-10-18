const express = require('express');
const axios = require('axios');

const userAgentList = require('../user-agent');

const router = express.Router();

router.get('/:value', async (req, res, next) => {
  try {
    const html = await axios.get(
      `https://www.amazon.com/s?k=${req.params.value}`,
      {
        headers: {
          'User-Agent': userAgentList[Math.floor(Math.random() * 20)],
        },
      },
    );
    res.send(html.data);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;

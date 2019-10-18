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
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
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

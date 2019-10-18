const express = require('express');
const axios = require('axios');

const userAgentList = require('../user-agent');

const router = express.Router();

router.get('/:asin', async (req, res, next) => {
  try {
    const html = await axios.get(
      `https://www.amazon.com/dp/${req.params.asin}`,
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

router.get('/option/:asin', async (req, res, next) => {
  try {
    const json = await axios.get(
      `https://sellercentral.amazon.com/fba/profitabilitycalculator/productmatches?searchKey=${
        req.params.asin
      }&language=en_US&profitcalcToken=${Math.random() * 10000}`,
    );
    res.json(json.data.data);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;

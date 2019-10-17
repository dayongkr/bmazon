const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/:value', async (req, res, next) => {
  try {
    const value = encodeURIComponent(req.params.value.replace(/\s*/g, '+'));
    const html = await axios.get(`https://www.amazon.com/s?k=${value}`, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4',
      },
    });
    res.send(html.data);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

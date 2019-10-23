const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const server = require('../server');

const phone = [
  'iPhone 6 Plus',
  'iPhone 6',
  'iPhone 7',
  'iPhone 7 Plus',
  'iPhone 8',
  'iPhone 8 Plus',
  'iPhone SE',
  'iPhone X',
  'iPhone XR',
  'Pixel 2 XL',
  'Pixel 2',
  'Galaxy S5',
];

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const result = await axios({
      method: 'post',
      url:
        'https://discordapp.com/api/webhooks/636364602426392576/40qDFSaV9dBbcS0H9y6p6-v_WyYlHK6NKIngjPaitTq_1UWFmnLSQFHjDBcJPcjpBNvX',

      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        content: `hello ${Date.now()}`,
      },
    });
    res.send(result.data);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.get('/ppom', async (req, res, next) => {
  try {
    const page = await server.browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', req => {
      switch (req.resourceType()) {
        case 'stylesheet':
        case 'font':
          req.abort();
          break;
        default:
          req.continue();
          break;
      }
    });
    await page.goto(`http://www.ppomppu.co.kr/zboard/zboard.php?id=ppomppu4`);
    const html = await page.content();
    const $ = cheerio.load(html);
    const text = $('font.list_title')
      .eq(0)
      .text();

    const href = $('font.list_title')
      .eq(0)
      .parent('a')
      .attr('href');

    const result = await axios({
      method: 'post',
      url:
        'https://discordapp.com/api/webhooks/636364602426392576/40qDFSaV9dBbcS0H9y6p6-v_WyYlHK6NKIngjPaitTq_1UWFmnLSQFHjDBcJPcjpBNvX',

      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        content: `${text}`,
        embeds: [
          { title: text, url: `http://www.ppomppu.co.kr/zboard/${href}` },
        ],
      },
    });
    res.send(text);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;

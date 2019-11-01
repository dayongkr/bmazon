const express = require('express');
const devices = require('puppeteer/DeviceDescriptors');
const apicache = require('apicache');

const db = require('../models');
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
const cache = apicache.middleware;

router.get('/:value', cache('3 minutes'), async (req, res, next) => {
  try {
    const page = await server.browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', req => {
      switch (req.resourceType()) {
        case 'stylesheet':
        case 'font':
        case 'image':
          req.abort();
          break;
        default:
          req.continue();
          break;
      }
    });
    await page.emulate(
      devices[phone[Math.floor(Math.random() * phone.length)]],
    );
    await page.goto(`https://www.amazon.com/s?k=${req.params.value}`);
    const html = await page.content();
    res.send(html);
    await page.close();
  } catch (e) {
    next(e);
  }
});

router.get('/list/:type', async (req, res, next) => {
  try {
    const mdListData = await db.Notice.findAll({
      where: { type: req.params.type },
    });
    return res.json(mdListData);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

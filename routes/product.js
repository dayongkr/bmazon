const express = require('express');
const devices = require('puppeteer/DeviceDescriptors');

const server = require('../server');
const getProduct = require('../function/getProduct');

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

router.get('/:asin', async (req, res, next) => {
  try {
    const page = await server.browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', _req => {
      switch (_req.resourceType()) {
        case 'stylesheet':
        case 'font':
        case 'image':
          _req.abort();
          break;
        default:
          _req.continue();
          break;
      }
    });
    await page.emulate(
      devices[phone[Math.floor(Math.random() * phone.length)]],
    );
    await page.goto(`https://www.amazon.com/dp/${req.params.asin}`);
    const html = await page.content();
    const productInfo = await getProduct(html);
    await res.json(productInfo);
    await page.close();
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;

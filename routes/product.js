const express = require('express');
const devices = require('puppeteer/DeviceDescriptors');
const puppeteer = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');

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

router.get('/:asin', async (req, res, next) => {
  try {
    puppeteer.use(pluginStealth());
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
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
    await page.goto(`https://www.amazon.com/dp/${req.params.asin}`);
    const html = await page.content();
    res.send(html);
    await page.close();
    await browser.close();
  } catch (e) {
    console.error(e);
    next(e);
  }
});

// router.get('/option/:asin', async (req, res, next) => {
//   try {
//     const json = await axios.get(
//       `https://sellercentral.amazon.com/fba/profitabilitycalculator/productmatches?searchKey=${
//         req.params.asin
//       }&language=en_US&profitcalcToken=${Math.random() * 10000}`,
//     );
//     res.json(json.data.data);
//   } catch (e) {
//     console.error(e);
//     next(e);
//   }
// });

module.exports = router;

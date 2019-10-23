const axios = require('axios');
const cheerio = require('cheerio');

const server = require('../server');

module.exports = cacheItem => async () => {
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
  if (cacheItem !== text) {
    await axios({
      method: 'post',
      url:
        'https://discordapp.com/api/webhooks/636432680635858945/5iXHgIzpBJOoDQRlIDED0waUOdexpvcrbrkCVLN9mG0PYTP0EjjiZTUxrzlIdSDin8PR',

      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        embeds: [
          { title: text, url: `http://www.ppomppu.co.kr/zboard/${href}` },
        ],
      },
    });
    cacheItem = text;
  }
  page.close();
};

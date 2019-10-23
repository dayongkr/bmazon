const axios = require('axios');
const cheerio = require('cheerio');

const server = require('../server');

module.exports = (cacheItem, dev) => async () => {
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

  const items = $('tr')
    .filter(
      (index, item) => $(item).hasClass('list1') || $(item).hasClass('list0'),
    )
    .filter(
      (index, item) =>
        +$(item)
          .children('td')
          .eq(0)
          .text()
          .trim() > cacheItem,
    )
    .map((index, item) => {
      const text = $(item)
        .find('font')
        .text();
      const href = $(item)
        .find('font')
        .parent('a')
        .attr('href');
      const number = +$(item)
        .children('td')
        .eq(0)
        .text()
        .trim();
      return { text, href, number };
    })
    .toArray()
    .sort((x, y) => x.number - y.number);

  if (items.length !== 0) {
    for (let i = 0; i < items.length; i += 1) {
      cacheItem = cacheItem < items[i].number ? items[i].number : cacheItem;
      try {
        await new Promise(resolve => setTimeout(() => resolve(), 1000));
        await axios({
          method: 'post',
          url: dev
            ? 'https://discordapp.com/api/webhooks/636364602426392576/40qDFSaV9dBbcS0H9y6p6-v_WyYlHK6NKIngjPaitTq_1UWFmnLSQFHjDBcJPcjpBNvX'
            : 'https://discordapp.com/api/webhooks/636432680635858945/5iXHgIzpBJOoDQRlIDED0waUOdexpvcrbrkCVLN9mG0PYTP0EjjiZTUxrzlIdSDin8PR',

          headers: {
            'Content-Type': 'application/json',
          },
          data: {
            embeds: [
              {
                title: items[i].text,
                url: `http://www.ppomppu.co.kr/zboard/${items[i].href}`,
              },
            ],
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
  }
  page.close();
};

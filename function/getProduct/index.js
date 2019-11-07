const cheerio = require('cheerio');

const imageUrl = require('./imageUrl');
const price = require('./price');
const name = require('./name');
const category = require('./category');
const details = require('./details');
const options = require('./options');
const ship = require('./ship');

async function getProduct(result) {
  const $ = cheerio.load(result);

  // // 늦게 로딩되는 이미지 로딩
  $('img.a-lazy-loaded').each((i, e) => {
    $(e).attr('src', $(e).data('src'));
  });

  // // 비디오 불러오기
  $('div.premium-module-8-hero-video').each((index, item) => {
    const src = $(item)
      .find('script')
      .filter((index, item) => item.firstChild)
      .map((index, item) => [
        item.firstChild.data.match(
          /https:\/\/m\.media-amazon\.com\/images\/S\/aplus-media\/vc\/\S*.mp4/,
        ),
        item.firstChild.data.match(
          /https:\/\/m\.media-amazon\.com\/images\/S\/aplus-media\/vc\/\S*.jpg/,
        ),
      ]);
    $(item).after(
      `<video controls preload="metadata" poster=${src[1]}><source src=${
        src[0]
      } type="video/mp4"></source></video>`,
    );
    $(item).remove();
  });

  return {
    imageUrl: imageUrl($),
    price: price($),
    name: name($),
    category: category($),
    details: details($),
    options: options($),
    ship: ship($),
  };
}

module.exports = getProduct;

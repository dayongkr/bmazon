const price = $ => {
  return $('div#cerberus-data-metrics').data('asin-price');
};

module.exports = price;

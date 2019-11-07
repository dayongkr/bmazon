const imageUrl = $ => {
  return $('div#image-block img').data('a-hires');
};

module.exports = imageUrl;

const details = $ => {
  return $('div#aplus3p_feature_div').length !== 0
    ? $('div#aplus3p_feature_div')
        .children('div')
        .html()
    : $('div#aplus_feature_div')
        .children('div')
        .html();
};

module.exports = details;

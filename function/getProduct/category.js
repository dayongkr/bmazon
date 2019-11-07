const category = $ => {
  const categoryArr = [];
  $('div#breadcrumb_feature_div a.a-link-child').each((i, elem) => {
    categoryArr.push(
      $(elem)
        .text()
        .trim(),
    );
  });
  return categoryArr;
};

module.exports = category;

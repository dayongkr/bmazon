const options = $ => {
  const optionDatas = [];
  const option = { option: [] };

  $('script')
    .filter((i, e) => {
      const data = $(e).data('a-state');
      if (typeof data === 'object') {
        return (
          data.key === 'mobile-twister-dim-val-list' ||
          data.key === 'mobile-twister-dims-to-asin-list' ||
          data.key === 'mobile-twister-dim-list'
        );
      }
    })
    .each((i, e) => {
      optionDatas[$(e).data('a-state').key] = JSON.parse(
        $(e)[0].firstChild.data,
      );
    });

  (() => {
    if (optionDatas['mobile-twister-dim-list']) {
      option.listName = optionDatas['mobile-twister-dim-list'].key;
      option.listValue = optionDatas['mobile-twister-dim-val-list'];
      const key = Object.keys(
        optionDatas['mobile-twister-dims-to-asin-list'],
      ).map(item => item.match(/(\d)/g));
      const value = Object.values(
        optionDatas['mobile-twister-dims-to-asin-list'],
      );
      option.option = key.map((item, index) => ({
        asin: value[index],
        list: item,
      }));
    }
  })();

  return option.option.length !== 0 ? option : null;
};

module.exports = options;

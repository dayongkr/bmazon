const ship = $ => {
  return $('span.a-declarative')
    .filter(
      (index, item) =>
        $(item).data('a-secondary-view') &&
        $(item).data('a-secondary-view').name === 'agShipMsgSecView',
    )
    .text()
    ? +$('span.a-declarative')
        .filter(
          (index, item) =>
            $(item).data('a-secondary-view') &&
            $(item).data('a-secondary-view').name === 'agShipMsgSecView',
        )
        .text()
        .match(/\$([\d\.]*)/)[1]
    : null;
};

module.exports = ship;

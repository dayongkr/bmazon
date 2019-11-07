const name = $ => {
  return $('meta[name=title]')
    .attr('content')
    .match(/(?<=:).*(?=:)/)[0]
    .trim();
};

module.exports = name;

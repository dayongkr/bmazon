const formattingComma = (number, ceil) => {
  if (isNaN(Number(number))) {
    return number;
  }
  if (typeof number === 'string') {
    number = Number(number);
  }
  if (ceil) {
    return String(Math.ceil(number)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};

export default formattingComma;

const colors = require('./colors');
const getHSV = require('./getHSV');

const getHue = color => getHSV(color).h
const getHueDifference = (colorA, colorB) => Math.abs(getHue(colorA) - getHue(colorB));

module.exports = (referenceColor, offset = 0, limit = Infinity) => {
  const filtered = !!referenceColor
    ? colors.filter((color) => getHueDifference(color, referenceColor) <= 10)
    : colors;
  return filtered.slice(offset, offset + limit);
};
const {cssColor} = require('color-functions');

const rgbString = ({r,g,b}) => `rgb(${r},${g},${b})`;
module.exports = (color) => `<a style="background-color:${rgbString(cssColor(color.hex))}"><span>${color.code}</span></a>`;
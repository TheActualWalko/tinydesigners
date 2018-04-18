const {cssColor} = require('color-functions');

const rgbString = ({r,g,b}) => `rgb(${r},${g},${b})`;
module.exports = ({hex, name}, url) => `<a href='${url}' style="background-color:${rgbString(cssColor(hex))}"><span>${name}</span></a>`;
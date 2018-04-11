const {rgb2hsv} = require('color-functions');
module.exports = ({r,g,b}) => rgb2hsv(r, g, b);
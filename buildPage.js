const path = require('path');
const fs = require('fs');
const template = fs.readFileSync(path.join(__dirname, '/index.html'), 'utf8');
const products = require('./products');
const contentInsert = '<!-- {{CONTENT GOES HERE}} -->';
const productDataInsert = '// {{PRODUCT DATA GOES HERE}}';

module.exports = (content) => template
  .replace(contentInsert, content)
  .replace(productDataInsert, JSON.stringify(products) + ';')
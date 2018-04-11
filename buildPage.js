const path = require('path');
const fs = require('fs');
const template = fs.readFileSync(path.join(__dirname, '/index.html'), 'utf8');
const contentInsert = '<!-- {{CONTENT GOES HERE}} -->';

module.exports = (content) => template.replace(contentInsert, content);
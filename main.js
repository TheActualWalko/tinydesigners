const express = require('express');
const getColors = require('./getColors');
const buildColorCell = require('./buildColorCell');
const buildPage = require('./buildPage');
const path = require('path');
const router = express.Router();

router.get('/style.css', (req, res) => res.sendFile(path.join(__dirname, 'style.css')));
router.get('/logo.png', (req, res) => res.sendFile(path.join(__dirname, 'logo.png')));

router.get('/', (req, res) => {
  res.send(buildPage(`
    <h3>My favorite color is...</h3>
    <section class='colors-list'>${getColors().map(buildColorCell).join('')}</section>
  `));
});

module.exports = router;
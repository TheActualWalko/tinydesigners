const express = require('express');
const getColors = require('./getColors');
const buildColorCell = require('./buildColorCell');
const buildPage = require('./buildPage');
const buildOrderForm = require('./buildOrderForm');
const path = require('path');
const router = express.Router();

const urlFragments = {
  T_SHIRT: 't-shirt',
  FAV_COLOR: 'my-favorite-color'
};

const PRICE = 50 * 100;

const buildSingleProductUrl = (type, line, slug) => `/${urlFragments[type]}/${urlFragments[line]}/${slug}`;
const buildProductImageUrl = (type, line, slug) => `/images/${urlFragments[type]}/${urlFragments[line]}/${slug}`;

router.get('/style.css', (req, res) => res.sendFile(path.join(__dirname, 'style.css')));
router.get('/logo.png', (req, res) => res.sendFile(path.join(__dirname, 'logo.png')));

router.get('/', (req, res) => {
  res.send(buildPage(`
    <h3>My favorite color is...</h3>
    <section class='colors-list'>${
      getColors()
        .map((color) => buildColorCell(color, buildSingleProductUrl('T_SHIRT', 'FAV_COLOR', color.slug)))
        .join('')
    }</section>
  `));
});

router.get('/t-shirt/my-favorite-color/:colorSlug', (req, res) => {
  const color = getColors().find(({ slug }) => slug === req.params.colorSlug);
  res.send(buildPage(`
    <section class='product'>
      <img class='preview' src='${buildProductImageUrl('T_SHIRT', 'FAV_COLOR', color.slug)}' />
      ${buildOrderForm('T_SHIRT', PRICE, `${color.name} Tee`)}
    </section>
    <h3>Similar Colors</h3>
    <section class='colors-list'>${
      getColors(color)
        .map((similarColor) => buildColorCell(similarColor, buildSingleProductUrl('T_SHIRT', 'FAV_COLOR', similarColor.slug)))
        .join('')
    }</section>
  `));
});

router.get('/images/t-shirt/my-favorite-color/:colorSlug', (req, res) => {
  res.sendFile(path.join(__dirname, 'placeholder.jpg'));
});

module.exports = router;
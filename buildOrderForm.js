const buildBuyButton = require('./buildBuyButton');

module.exports = (id, price, title) => `
  <form action="buy/${id}" method="POST">
    <h4>${title}</h4>
    <span class='price'>$${price/100}</span>
    <div class='form-field'>
      <label>Size (<span class='sizing-info'>Sizing Info</span>)</label>
      <div class='button-group'>
        <button>XS</button>
        <button class='active'>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>
      </div>
    </div>
    <div class='form-field'>
      <label>Quantity</label>
      <input type='number' min='1' max='10' value='1' />
    </div>
    ${buildBuyButton(id, price, title)}
    <p>
      Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
    </p>
    <ul>
      <li>Vestibulum nec erat ut mi sollicitudin.</li>
      <li>Porttitor id sit amet risus. Nam tempus vel.</li>
      <li>100% Lorem.</li>
    </ul>
  </form>
`;

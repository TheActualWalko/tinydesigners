module.exports = (id, price, title) => `
  <form action="buy/${id}" method="POST">
    <h4 id='product-title'>${title}</h4>
    <span class='price'>$${price/100}</span>
    <div class='form-field'>
      <label>Size (<span class='sizing-info'>Sizing Info</span>)</label>
      <div class='button-group'>
        <button class='size-button' data-size='Extra Small'>XS</button>
        <button class='active size-button' data-size='Small'>S</button>
        <button class='size-button' data-size='Medium'>M</button>
        <button class='size-button' data-size='Large'>L</button>
        <button class='size-button' data-size='Extra Large'>XL</button>
      </div>
    </div>
    <div class='form-field'>
      <label>Quantity</label>
      <input type='number' min='1' max='10' value='1' id='quantity-input' />
    </div>
    <button class='buy-button' id='buy-button'>Buy Now!</button>
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

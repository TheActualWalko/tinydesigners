const titleElement = document.getElementById('product-title');
const buyButton = document.getElementById('buy-button');
const quantityInput = document.getElementById('quantity-input');
const sizeButtons = document.querySelectorAll('.size-button');

if (buyButton) {
  const title = titleElement.innerHTML;
  const getSize = () => {
    return [...sizeButtons].find((button) => button.className.includes('active')).getAttribute('data-size');
  }

  sizeButtons.forEach((button) => button.addEventListener('click', () => {
    sizeButtons.forEach((button) => button.className = button.className
      .split(' ')
      .filter(name => name !== 'active')
      .join(' ')
    );
    button.className += ' active';
  }));

  var handler = StripeCheckout.configure({
    key: 'pk_test_pcTf4h2wldFE8eO8xs7Doxc9',
    image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    zipCode: true,
    shippingAddress: true,
    token: function(token) {
      console.log(token);
    }
  });

  document.getElementById('buy-button').addEventListener('click', function(e) {
    const quantity = quantityInput.value;
    handler.open({
      name: 'Tiny Designers',
      description: `${quantity > 1 ? quantity + 'x' : ''} ${title} (${getSize()})`,
      currency: 'usd',
      amount: PRODUCTS.T_SHIRT.price * quantityInput.value
    });
    e.preventDefault();
  });

  window.addEventListener('popstate', function() {
    handler.close();
  });
}
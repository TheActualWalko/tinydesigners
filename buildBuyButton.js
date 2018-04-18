module.exports = (id, price, title) => `
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="pk_test_pcTf4h2wldFE8eO8xs7Doxc9"
    data-amount="${price}"
    data-name="Tiny Designers"
    data-description="${title}"
    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
    data-locale="auto"
    data-currency="usd">
  </script>
`;
document.addEventListener('DOMContentLoaded', () => {

  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const itemsContainer = document.getElementById('cart-items');
  const totalContainer = document.getElementById('cart-total');

  if (cart.length === 0) {
    itemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    totalContainer.innerHTML = '';
    return;
  }

  let total = 0;
  itemsContainer.innerHTML = ''; // clear placeholder

  cart.forEach((item, idx) => {
    total += item.price * item.quantity;

    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p>
          $${item.price.toFixed(2)} × 
          <button class="qty-btn decrease" data-idx="${idx}">−</button>
          <input type="number" class="qty-input" data-idx="${idx}" value="${item.quantity}" min="1" />
          <button class="qty-btn increase" data-idx="${idx}">+</button>
          = $${(item.price * item.quantity).toFixed(2)}
        </p>
        <button class="remove-btn" data-idx="${idx}">Remove</button>
      `;
    itemsContainer.appendChild(itemDiv);
  });

  totalContainer.innerHTML = `<h2>Total: $${total.toFixed(2)}</h2>`;

  // Delegate all button/input events
  itemsContainer.addEventListener('click', e => {
    const idx = Number(e.target.dataset.idx);
    if (e.target.classList.contains('remove-btn')) {
      cart.splice(idx, 1);
    } else if (e.target.classList.contains('decrease')) {
      if (cart[idx].quantity > 1) cart[idx].quantity--;
    } else if (e.target.classList.contains('increase')) {
      cart[idx].quantity++;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
  });

  itemsContainer.addEventListener('change', e => {
    if (e.target.classList.contains('qty-input')) {
      const idx = Number(e.target.dataset.idx);
      let val = parseInt(e.target.value, 10) || 1;
      cart[idx].quantity = val < 1 ? 1 : val;
      localStorage.setItem('cart', JSON.stringify(cart));
      location.reload();
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
    //Load the cart array
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const itemsContainer = document.getElementById('cart-items');
    const totalContainer = document.getElementById('cart-total');
  
    //If empty, show a message
    if (cart.length === 0) {
      itemsContainer.innerHTML = '<p>Your cart is empty.</p>';
      totalContainer.innerHTML = '';
      return;
    }
  
    //Render each item with a Remove button
    let total = 0;
    itemsContainer.innerHTML = ''; // clear any placeholder
    cart.forEach((item, idx) => {
      total += item.price;
      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';
      itemDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p>$${item.price.toFixed(2)}</p>
        <button class="remove-from-cart" data-index="${idx}">
          Remove
        </button>
      `;
      itemsContainer.appendChild(itemDiv);
    });
  
    //Show the total
    totalContainer.innerHTML = `<h2>Total: $${total.toFixed(2)}</h2>`;
  
    //Delegate clicks on Remove buttons
    itemsContainer.addEventListener('click', e => {
      if (!e.target.classList.contains('remove-from-cart')) return;
      const idx = Number(e.target.dataset.index);
      // remove that item
      cart.splice(idx, 1);
      // persist updated cart
      localStorage.setItem('cart', JSON.stringify(cart));
      // re-render the page (simple approach)
      location.reload();
    });
  });
  
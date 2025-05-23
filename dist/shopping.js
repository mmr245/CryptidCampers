// Import the products array and Product type from products.ts
import { products } from "./products.js";

// Function to render the products dynamically on the shopping page
export function renderProducts(productList) {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = ""; // clear any old items

  productList.forEach(product => {
    grid.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button class="add-to-cart" data-id="${product.id}">
          Add to Cart
        </button>
      </div>
    `;
  });
}

export function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}
// listen for clicks on any “Add to Cart” button
document
  .getElementById("product-grid")
  .addEventListener("click", e => {
    if (!e.target.classList.contains("add-to-cart")) return;
    const id = e.target.dataset.id;
    const product = products.find(p => p.id === id);
    if (product) addToCart(product);
  });


function getRandomFeatured(arr, n) {
  return arr
    .map(v => ({ sort: Math.random(), value: v }))
    .sort((a, b) => a.sort - b.sort)
    .slice(0, n)
    .map(o => o.value);
}

document.addEventListener("DOMContentLoaded", () => {
  // if there's a filter panel, skip the random-featured logic
  if (document.getElementById("apply-filters")) return;

  const featured = getRandomFeatured(products, 4);
  renderProducts(featured);
});
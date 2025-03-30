// Import the products array and Product type from products.ts
import { Product, products } from "./products";

// Function to render the products dynamically on the shopping page
function renderProducts(productList: Product[]): void {
  const grid = document.getElementById("product-grid");
  if (!grid) {
    console.error("Product grid element not found!");
    return;
  }
  
  grid.innerHTML = ""; // Clear any existing content

  productList.forEach(product => {
    grid.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">
          Add to Cart
        </button>
      </div>
    `;
  });
}

// Wait for the DOM to fully load, then render products
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the products array and Product type from products.ts
var products_1 = require("./products");
// Function to render the products dynamically on the shopping page
function renderProducts(productList) {
    var grid = document.getElementById("product-grid");
    if (!grid) {
        console.error("Product grid element not found!");
        return;
    }
    grid.innerHTML = ""; // Clear any existing content
    productList.forEach(function (product) {
        grid.innerHTML += "\n      <div class=\"product\">\n        <img src=\"".concat(product.image, "\" alt=\"").concat(product.name, "\" />\n        <h3>").concat(product.name, "</h3>\n        <p>$").concat(product.price.toFixed(2), "</p>\n        <button class=\"add-to-cart\" data-id=\"").concat(product.id, "\" data-name=\"").concat(product.name, "\" data-price=\"").concat(product.price, "\">\n          Add to Cart\n        </button>\n      </div>\n    ");
    });
}
// Wait for the DOM to fully load, then render products
document.addEventListener("DOMContentLoaded", function () {
    renderProducts(products_1.products);
});

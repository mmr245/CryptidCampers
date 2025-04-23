import { products } from "./products.js";
import { renderProducts } from "./shopping.js";

document.addEventListener('DOMContentLoaded', () => {
    // grab your DOM elements after the page loads
    const catSelect  = document.getElementById('category-filter');
    const minInput   = document.getElementById('min-price');
    const maxInput   = document.getElementById('max-price');
    const applyBtn   = document.getElementById('apply-filters');
  
    // helper to read ?category=…&min=…&max=…
    const params = new URLSearchParams(window.location.search);
    catSelect.value = params.get('category') || '';
    minInput.value  = params.get('min')      || '';
    maxInput.value  = params.get('max')      || '';
  
    // main filter + render function
    function filterAndRender() {
      let filtered = products;
  
      // category filter
      if (catSelect.value) {
        filtered = filtered.filter(p => p.category === catSelect.value);
      }
  
      // price filter
      const min = parseFloat(minInput.value) || 0;
      const max = parseFloat(maxInput.value) || Infinity;
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
  
      // finally render
      renderProducts(filtered);
    }
  
    // re-write the URL and re-render on button click
    applyBtn.addEventListener('click', () => {
      const newParams = new URLSearchParams();
      if (catSelect.value) newParams.set('category', catSelect.value);
      if (minInput.value)  newParams.set('min',      minInput.value);
      if (maxInput.value)  newParams.set('max',      maxInput.value);
      history.replaceState(null, '', '?' + newParams.toString());
      filterAndRender();
    });
  
    // initial render
    filterAndRender();
  });
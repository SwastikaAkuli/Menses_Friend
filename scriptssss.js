let totalItems = 0;
let totalPrice = 0;

function updateCartSummary() {
  document.getElementById("cart-item-count").textContent = totalItems;
  document.getElementById("total-items").textContent = totalItems;
  document.getElementById("total-price").textContent = totalPrice;
}

function showCartSidebar() {
  document.getElementById("cart-sidebar").style.display = "block";
}

function addToCartFromButton(button) {
  const productDetails = button.closest(".product-details");
  const productName = productDetails.querySelector("h1").textContent;
  const priceText = productDetails.querySelector(".price").textContent;
  const price = parseInt(priceText.replace("₹", "").replace(",", ""));
  const quantity = parseInt(productDetails.querySelector("#quantity").value);

  addToCart(productName, price, quantity);
}

function addToCart(productName, price, quantity) {
  const cartItemsList = document.getElementById("cart-items-list");

  const listItem = document.createElement("li");
  listItem.classList.add("cart-item");

  listItem.innerHTML = `
    <div>
      <span class="name">${productName}</span> - 
      <span class="qty">${quantity}</span> x 
      <span class="price">₹${price}</span>
    </div>
    <button class="remove-btn">❌</button>
  `;

  // Add remove functionality
  listItem.querySelector(".remove-btn").addEventListener("click", () => {
    listItem.remove();
    totalItems -= quantity;
    totalPrice -= price * quantity;
    updateCartSummary();
  });

  cartItemsList.appendChild(listItem);

  totalItems += quantity;
  totalPrice += price * quantity;
  updateCartSummary();
}

// Attach listeners after DOM load
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");
  buttons.forEach(button => {
    button.addEventListener("click", () => addToCartFromButton(button));
  });
});

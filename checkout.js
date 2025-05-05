document.getElementById("payment-method").addEventListener("change", function () {
    const paymentMethod = this.value;
    const cardDetailsSection = document.getElementById("credit-card-details");
    
    if (paymentMethod === "credit-card") {
      cardDetailsSection.style.display = "block";
    } else {
      cardDetailsSection.style.display = "none";
    }
  });
  
  // Handle form submission
  document.getElementById("checkout-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page
  
    const userDetails = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      zipcode: document.getElementById("zipcode").value,
      paymentMethod: document.getElementById("payment-method").value
    };
  
    if (userDetails.paymentMethod === "credit-card") {
      userDetails.cardNumber = document.getElementById("card-number").value;
      userDetails.expiryDate = document.getElementById("expiry-date").value;
      userDetails.cvv = document.getElementById("cvv").value;
    }
  
    // Here, you can send the data to your server for further processing
    console.log("User Details:", userDetails);
    alert("Order placed successfully!");
    window.location.href = "confirmation.html"; // Redirect to order confirmation page
  });
  
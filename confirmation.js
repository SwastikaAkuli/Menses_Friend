
  const data = JSON.parse(localStorage.getItem("orderData"));

  if (data) {
    document.getElementById("user-name").innerText = data.name;
    document.getElementById("user-address").innerText = data.address;
    document.getElementById("user-phone").innerText = data.phone;
    document.getElementById("payment-method").innerText = data.paymentMethod;
    document.getElementById("total-amount").innerText = "₹" + data.total;

    const itemList = document.getElementById("ordered-items");
    data.items.forEach(item => {
      const li = document.createElement("li");
      li.innerText = `${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`;
      itemList.appendChild(li);
    });
  } else {
    document.getElementById("confirmation-message").innerText = "No order found!";
  }

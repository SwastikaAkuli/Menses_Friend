document.querySelector('.contact-us-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting normally
  
    // Collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
  
    // You can send this data to a server or email system using AJAX or similar methods
  
    alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
  
    // Reset the form after submission
    document.querySelector('.contact-us-form').reset();
  });
  
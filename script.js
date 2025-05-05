
// Handle Feedback Form Submission
document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("feedbackName").value;
  const text = document.getElementById("feedbackText").value;

  alert(`Thank you, ${name}! Your feedback has been submitted.\nRating: ${selectedRating}\nMessage: ${text}`);

  this.reset();
  stars.forEach(s => s.classList.remove("selected"));
  selectedRating = 0;
  document.getElementById("feedbackFormContainer").style.display = "none";
});

// Contact form handling
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! We’ll get back to you soon.");
    this.reset();
  });
  
  // Add to Cart buttons
  const addToCartButtons = document.querySelectorAll("button");
  
  addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.textContent === "Add to Cart") {
        alert("Product added to cart! (Note: This is a demo functionality)");
      }
    });
  });
  
  // Smooth scroll for nav links
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute("href"));
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
  const toggleBtn = document.getElementById('feedbackToggleBtn');
  const feedbackFormContainer = document.getElementById('feedbackFormContainer');

  toggleBtn.addEventListener('click', () => {
    feedbackFormContainer.style.display = feedbackFormContainer.style.display === 'none' ? 'block' : 'none';
  });

  const stars = document.querySelectorAll('.star');
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const value = star.getAttribute('data-value');
      stars.forEach(s => s.classList.remove('selected'));
      for (let i = 0; i < value; i++) {
        stars[i].classList.add('selected');
      }
    });
  });

  



document.addEventListener('DOMContentLoaded', function () {


// Smooth Scrolling Effect
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact Form Submission (Example Logic)
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  // You can replace this with an actual form submission logic (e.g., AJAX or API call)
  alert('Thank you for reaching out, we will get back to you soon!');
});

// Scroll to Top Button (Optional Feature)
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Show the scroll to top button when user scrolls down
window.addEventListener('scroll', () => {
  console.log('Scroll Position:', window.scrollY); // Debug
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

// Email Subscription Logic
const subscribeButton = document.getElementById('subscribeButton');
const subscribeMessage = document.getElementById('subscribeMessage');
const emailInput = document.getElementById('email');

// Add event listener to the button
subscribeButton.addEventListener('click', () => {
  const email = emailInput.value.trim(); // Get the entered email and trim whitespace
  
  // Email validation regex (checks for a valid email format)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) { // Check if the email field is not empty
    subscribeMessage.style.display = 'block'; // Show the "Subscribed" message
    subscribeMessage.textContent = 'Subscribed!'; // Set the text
    emailInput.value = ''; // Clear the input field
  } else {
    alert('Please enter a valid email address.'); // Alert the user if the input is empty
  }
});
});

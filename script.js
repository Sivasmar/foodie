// Cache DOM elements for better performance
const searchForm = document.querySelector('.search-form-container');
const cart = document.querySelector('.shopping-cart-container');
const loginForm = document.querySelector('.login-form-container');
const navbar = document.querySelector('.header .navbar');
const homeSection = document.querySelector('.home');
const homeParallaxImg = document.querySelector('.home .home-parallax-img');

// Array to hold all toggleable elements
const toggleableElements = [searchForm, cart, loginForm, navbar];

// Function to toggle form visibility with element existence check
function toggleForm(activeElement) {
  if (activeElement) {
    activeElement.classList.toggle('active');
    removeActiveExcept(activeElement);
  }
}

// Remove 'active' class from all other elements except the one clicked
function removeActiveExcept(activeElement) {
  toggleableElements.forEach(el => {
    if (el && el !== activeElement) {
      el.classList.remove('active');
    }
  });
}

// Add event listeners for buttons using addEventListener
document.querySelector('#search-btn')?.addEventListener('click', function() {
  toggleForm(searchForm);
});

document.querySelector('#cart-btn')?.addEventListener('click', function() {
  toggleForm(cart);
});

document.querySelector('#login-btn')?.addEventListener('click', function() {
  toggleForm(loginForm);
});

document.querySelector('#menu-btn')?.addEventListener('click', function() {
  toggleForm(navbar);
});

// Throttle function to limit scroll events
function throttle(fn, wait) {
  let lastTime = 0;
  return function(...args) {
    const now = new Date().getTime();
    if (now - lastTime >= wait) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}

// Remove navbar active class on scroll with throttling
window.addEventListener('scroll', throttle(() => {
  if (navbar) {
    navbar.classList.remove('active');
  }
}, 100));  // Limit scroll events to once every 100ms

// Parallax effect on mouse movement in home section with boundaries
homeSection?.addEventListener('mousemove', (e) => {
  const x = Math.min((window.innerWidth - e.pageX * 2) / 90, 50);  // Limit max movement
  const y = Math.min((window.innerHeight - e.pageY * 2) / 90, 50); // Limit max movement
  homeParallaxImg.style.transform = `translateX(${y}px) translateY(${x}px)`;
});

// Reset parallax effect when the mouse leaves the home section
homeSection?.addEventListener('mouseleave', () => {
  homeParallaxImg.style.transform = `translateX(0px) translateY(0px)`;
});

// Login Validation

// Cache DOM elements for login form validation
const usernameField = document.querySelector('#username');
const passwordField = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');

// Function to validate the login form
function validateLoginForm() {
  const username = usernameField.value.trim();  // Remove any extra spaces
  const password = passwordField.value.trim();

  if (!username || !password) {  // Check if either field is empty
    displayError('Please fill in both username and password.');
    return false;  // Prevent form submission
  }

  if (password.length < 6) {  // Example of more specific validation
    displayError('Password must be at least 6 characters long.');
    return false;
  }

  clearError();  // Clear any error messages
  return true;  // Allow form submission
}

// Function to display error messages
function displayError(message) {
  errorMessage.textContent = message;
  errorMessage.style.color = 'red';
}

// Function to clear error messages
function clearError() {
  errorMessage.textContent = '';
}

// Add event listener for form submission
loginForm?.addEventListener('submit', (event) => {
  event.preventDefault();  // Prevent default form submission
  if (validateLoginForm()) {
    // If the validation passes, submit the form or perform other actions
    console.log('Login successful!');
    // You can proceed with form submission here (e.g., AJAX call)
  }
});

// Cache DOM elements for better performance
const searchForm = document.querySelector('.search-form-container');
const cart = document.querySelector('.shopping-cart-container');
const loginForm = document.querySelector('.login-form-container');
const navbar = document.querySelector('.header .navbar');
const homeSection = document.querySelector('.home');
const homeParallaxImg = document.querySelector('.home .home-parallax-img');

// Toggle the search form
document.querySelector('#search-btn').onclick = () => toggleForm(searchForm);

// Toggle the shopping cart
document.querySelector('#cart-btn').onclick = () => toggleForm(cart);

// Toggle the login form
document.querySelector('#login-btn').onclick = () => toggleForm(loginForm);

// Toggle the navbar
document.querySelector('#menu-btn').onclick = () => toggleForm(navbar);

// Function to toggle form visibility
function toggleForm(activeElement) {
  // Add 'active' class to the clicked element and remove from others
  activeElement.classList.toggle('active');
  removeActiveExcept(activeElement);
}

// Remove 'active' class from all other elements
function removeActiveExcept(activeElement) {
  const elements = [searchForm, cart, loginForm, navbar];
  elements.forEach(el => {
    if (el !== activeElement) {
      el.classList.remove('active');
    }
  });
}

// Remove navbar active class on scroll
window.onscroll = () => {
  navbar.classList.remove('active');
};

// Parallax effect on mouse movement in home section
homeSection.onmousemove = (e) => {
  const x = (window.innerWidth - e.pageX * 2) / 90;
  const y = (window.innerHeight - e.pageY * 2) / 90;
  homeParallaxImg.style.transform = `translateX(${y}px) translateY(${x}px)`;
};

// Reset parallax effect when the mouse leaves the home section
  homeSection.onmouseleave = () => {
  homeParallaxImg.style.transform = `translateX(0px) translateY(0px)`;
};
    
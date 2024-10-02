var inputs = document.getElementsByClassName("input-field");
var toggle_btn = document.getElementsByClassName("toggle");
var main = document.querySelector("main");
var bullets = document.getElementsByClassName("bullet");
var images = document.getElementsByClassName("image");

var formSignIn = document.querySelector('.sign-in-form');
var formSignUp = document.querySelector('.sign-up-form');

// Validation regex patterns
var namePattern = /^[a-zA-Z0-9]{4,}$/;
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var passwordPattern = /^.{4,}$/;

// SweetAlert function for validation error
function showValidationError(message) {
  Swal.fire({
    icon: 'error',
    title: 'Invalid Input',
    text: message,
  });
}

// Validate form inputs on Sign In/Sign Up submit
function validateInput(input, pattern, errorMessage) {
  if (!pattern.test(input.value.trim())) { // Added trim() to handle spaces
    showValidationError(errorMessage);
    input.classList.add("invalid");
    return false;
  } else {
    input.classList.remove("invalid");
    return true;
  }
}

// Input focus and blur functionality
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", function () {
    this.classList.add("active");
  });

  inputs[i].addEventListener("blur", function () {
    if (this.value.trim() != "") return;
    this.classList.remove("active");
  });
}

// Toggle between sign-in and sign-up forms
for (var i = 0; i < toggle_btn.length; i++) {
  toggle_btn[i].addEventListener("click", function () {
    main.classList.toggle("sign-up-mode");
  });
}

// Validate the Sign-In form
formSignIn.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission for validation

  var nameInput = formSignIn.querySelector('input[type="text"]');
  var passwordInput = formSignIn.querySelector('input[type="password"]');

  // Validate name and password
  var isNameValid = validateInput(nameInput, namePattern, 'Name must be at least 4 characters and alphanumeric.');
  var isPasswordValid = validateInput(passwordInput, passwordPattern, 'Password must be at least 4 characters.');

  if (isNameValid && isPasswordValid) {
    // If valid, proceed with form submission
    Swal.fire({
      icon: 'success',
      title: 'Login Successful',
      text: 'You have successfully logged in!',
    });
    // You can proceed with actual form submission here
    // formSignIn.submit();
  }
});

// Validate the Sign-Up form
formSignUp.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission for validation

  var nameInput = formSignUp.querySelector('input[type="text"]');
  var emailInput = formSignUp.querySelector('input[type="email"]');
  var passwordInput = formSignUp.querySelector('input[type="password"]');

  // Validate name, email, and password
  var isNameValid = validateInput(nameInput, namePattern, 'Name must be at least 4 characters and alphanumeric.');
  var isEmailValid = validateInput(emailInput, emailPattern, 'Please enter a valid email address.');
  var isPasswordValid = validateInput(passwordInput, passwordPattern, 'Password must be at least 4 characters.');

  if (isNameValid && isEmailValid && isPasswordValid) {
    // If valid, proceed with form submission
    Swal.fire({
      icon: 'success',
      title: 'Registration Successful',
      text: 'You have successfully signed up!',
    });
    // You can proceed with actual form submission here
    // formSignUp.submit();
  }
});

// Function to move the slider
function moveSlider() {
  var index = this.getAttribute('data-value');

  var currentImage = document.querySelector(`.img-${index}`);
  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove("show");
  }
  currentImage.classList.add("show");

  var textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  for (var i = 0; i < bullets.length; i++) {
    bullets[i].classList.remove("active");
  }
  this.classList.add("active");
}

// Event listener for the carousel bullets
for (var i = 0; i < bullets.length; i++) {
  bullets[i].addEventListener("click", moveSlider);
}


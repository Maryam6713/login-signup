const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

// Toggle for register form
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    wrapper.classList.add('active-popup'); // Ensure popup is active for register
});

// Toggle for login form
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Closing logic for both forms
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active'); // Ensure both forms close
});

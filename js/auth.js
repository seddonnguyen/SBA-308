import { validateEmail } from './utils.js';
import '../css/styles.css';

document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('signInForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    signInForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        emailInput.setCustomValidity('');
        passwordInput.setCustomValidity('');

        if (!validateEmail(emailInput.value)) {
            emailInput.setCustomValidity('Please enter a valid email address.');
            valid = false;
        }

        if (!valid) {
            emailInput.reportValidity();
            passwordInput.reportValidity();
        } else {
            window.location.href = 'pages/pokemon.html';
        }
    });

    emailInput.addEventListener('input', () => emailInput.setCustomValidity(''));
    passwordInput.addEventListener('input', () => passwordInput.setCustomValidity(''));
});
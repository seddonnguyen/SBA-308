document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    const validateEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.trim());
    const validatePassword = (password) => /\S{6,}/.test(password.trim());

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        emailInput.setCustomValidity('');
        passwordInput.setCustomValidity('');
        confirmPasswordInput.setCustomValidity('');

        if (!validateEmail(emailInput.value)) {
            emailInput.setCustomValidity('Please enter a valid email address.');
            valid = false;
        }

        if (!validatePassword(passwordInput.value)) {
            passwordInput.setCustomValidity('Password must be at least 6 characters long.');
            valid = false;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.setCustomValidity('Passwords do not match.');
            valid = false;
        }

        if (!valid) {
            emailInput.reportValidity();
            passwordInput.reportValidity();
            confirmPasswordInput.reportValidity();
        } else {
            window.location.href = 'index.html';
        }
    });

    emailInput.addEventListener('input', () => emailInput.setCustomValidity(''));
    passwordInput.addEventListener('input', () => passwordInput.setCustomValidity(''));
    confirmPasswordInput.addEventListener('input', () => confirmPasswordInput.setCustomValidity(''));
});
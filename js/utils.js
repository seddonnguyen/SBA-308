export const validateEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.trim());
export const validatePassword = (password) => /\S{6,}/.test(password.trim());
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    if (username && password) { // Simple check for non-empty values
        window.location.href = '../pages/pokemon.html'; // Redirect to Pokémon page on successful login
    } else {
        alert('Please enter both username and password');
    }
});
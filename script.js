document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple client-side authentication logic (for demonstration only)
    // In a real-world scenario, you should never use hard-coded credentials
    const validUsername = 'user';
    const validPassword = 'password';
    
    if (username === validUsername && password === validPassword) {
        // Redirect to another page or indicate successful login
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to home page
    } else {
        // Display error message
        document.getElementById('errorMsg').textContent = 'Invalid username or password';
    }
});

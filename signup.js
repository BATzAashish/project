document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Simple client-side validation
    if (password !== confirmPassword) {
        document.getElementById('errorMsg').textContent = 'Passwords do not match';
        return;
    }
    
    // Further processing can be done here, such as sending data to the server
    alert('Sign up successful!');
    window.location.href = 'login.html'; // Redirect to login page
});

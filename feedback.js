document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple client-side validation
    if (name && email && message) {
        // Display success message
        document.getElementById('feedbackMsg').textContent = 'Thank you for your feedback!';
        
        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        // Display error message if any field is empty (this should not happen due to 'required' attribute)
        document.getElementById('feedbackMsg').textContent = 'Please fill in all fields.';
    }
});

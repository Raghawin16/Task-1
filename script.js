document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Check if the form is valid
    if (this.checkValidity()) {
        // Alert and redirect to a success page
        alert('Form submitted successfully! Redirecting to success page...');
        window.location.href = 'success.html'; // Ensure this file exists
    } else {
        // Optionally, you can handle specific field validation here
    }
});

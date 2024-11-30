// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (name && email && message) {
        alert(`Message Sent! \nName: ${name} \nEmail: ${email} \nMessage: ${message}`);

        // Clear the form
        document.getElementById('contact-form').reset();
    } else {
        alert("Please fill in all fields.");
    }
});
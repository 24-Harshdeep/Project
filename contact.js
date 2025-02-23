document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // prevent from submission
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let terms = document.getElementById('terms').checked;

    if (name === "" || email === "" || message === "" || !terms) {
        alert('Please fill all fields and accept all the terms.');
    } else {
        alert('Your message has been submitted successfully!');
        this.reset(); // reset form after submission
    }
    
});
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Simulate form submission and display a message
  const statusMessage = document.getElementById('form-status');
  statusMessage.textContent = "Message sent successfully!";
  statusMessage.style.color = "green";

  // Clear form fields after submission
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});



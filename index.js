// Get the signup form element
const signupForm = document.querySelector('form');

// Add a submit event listener to the signup form
signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting

  // Get the form inputs
  const name = document.querySelector('#teacher-name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirm-password').value;

  // Validate the form inputs
  if (password !== confirmPassword) {
    alert('Password and Confirm Password do not match');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Invalid Email');
    return;
  }

  if (name === '') {
    alert('Name cannot be empty');
    return;
  }

  // Create a new user object
  const user = { email, pass: password, name };

  // Get the existing users array from local storage or create a new one
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if the email already exists in the users array
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    alert('Email already exists');
    return;
  }

  // Add the new user to the users array and store it in local storage
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  // Redirect the teacher to the login page
  window.location.href = 'login.html';
});

// Function to validate email format
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

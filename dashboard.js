

 // Retrieve the current user from local storage
 const currentUser = JSON.parse(localStorage.getItem('currentUser'));

 // Check if a user is currently logged in
 if (currentUser) {
   // Display the user's name on the page
   const teacherName = document.getElementById('teacher-name');
   teacherName.textContent = currentUser.name;
 } else {
   // If no user is logged in, redirect to login page
   window.location.href = 'login.html';
 }
 // Get the welcome message element
const welcomeMessage = document.getElementById('email');
// Set its text content to the teacher's email
welcomeMessage.textContent = currentUser.email;



// Get the current user data from localStorage
// const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// Get the logout button element and add a click event listener
const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', () => {
  // Remove the currentUser state from localStorage
  localStorage.removeItem('currentUser');
  // Redirect the user to the login page
  window.location.href = 'login.html';
});

// Get the form element and add a submit event listener
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Get the form data
  const formData = new FormData(form);
  const oldPassword = formData.get('old-password');
  const newPassword = formData.get('new-password');
  const confirmNewPassword = formData.get('confirm-new-password');
  // Check if the old password is correct
  if (currentUser.pass === oldPassword) {
    // Check if the new password and confirm new password match
    if (newPassword === confirmNewPassword) {
      // Update the current user's password in localStorage
      currentUser.pass = newPassword;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      // Show a success message to the user
      alert('Password changed successfully!');
    } else {
      // Show an error message to the user
      alert('New password and confirm new password must match!');
    }
  } else {
    // Show an error message to the user
    alert('Old password is incorrect!');
  }
});

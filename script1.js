const registrationForm = document.getElementById('registration-form');
const loginForm = document.getElementById('login-form');

// Validate registration form and save user data in database
registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = registrationForm.name.value;
  const email = registrationForm.email.value;
  const password = registrationForm.password.value;

  // Validate form fields
  if (!name || !email || !password) {
    alert('Please fill in all fields');
    return;
  }

  // Save user data in database
  // ...

  // Clear form fields
  registrationForm.reset();
});

// Validate login form and check user data in database
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm.loginEmail.value;
  const password = loginForm.loginPassword.value;

  // Validate form fields
  if (!email || !password) {
    alert('Please fill in all fields');
    return;
  }

  // Check user data in database
  // ...

  // If user data matches, redirect to grievance submission page
  // ...
});
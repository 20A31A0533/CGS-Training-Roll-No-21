 // Predefined login credentials
const validUsername = "surya@gmail.com";
const validPassword = "surya@2309";

// Submit Login Form
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const alertSlider = document.getElementById('alertSlider');

    // Remove any previous success/failure classes
    alertSlider.classList.remove("alert-success", "alert-failure");

    // Check credentials
    if (usernameField.value === validUsername && passwordField.value === validPassword) {
        passwordError.textContent = '';
        showAlert("Login Successful", "alert-success");  // Green for success
        // Redirect to dashboard after 1 second
        setTimeout(() => {
            window.location.href = "dashboard.html"; // Replace with your actual dashboard page
        }, 1000);
    } else {
        passwordError.textContent = 'Login Failed. Invalid credentials.';
        passwordField.classList.add('error-border');
        showAlert("Login Failed", "alert-failure");  // Red for failure
    }
});

// Show Registration Form
document.getElementById("createAccountLink").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("registrationContainer").style.display = "block";
});

// Show alert slider
function showAlert(message, alertClass) {
    const alertSlider = document.getElementById('alertSlider');
    alertSlider.innerHTML = message;
    alertSlider.classList.add(alertClass, 'show'); // Add the alert class (success or failure)

    // Hide the alert slider after 3 seconds
    setTimeout(() => {
        alertSlider.classList.remove('show', alertClass);  // Remove the alert class after hiding
    }, 3000);
}

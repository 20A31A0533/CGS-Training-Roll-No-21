// JavaScript for Dashboard Functionality

const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("mainContent");
const nameField = document.getElementById("username");
const logoutBtn = document.querySelector('.logout-btn');

// Function to toggle the sidebar
function toggleSidebar() {
    sidebar.classList.toggle('hidden');
    adjustLayout(); // Adjust the layout after toggling
}

// Function to adjust the layout when sidebar is toggled
function adjustLayout() {
    if (sidebar.classList.contains('hidden')) {
        mainContent.classList.add('full-width');
    } else {
        mainContent.classList.remove('full-width');
    }
}

// Load username from localStorage when page loads
window.addEventListener("load", () => {
    let username = localStorage.getItem("username");
    if (username) {
        nameField.textContent = username;
    } else {
        nameField.textContent = "Guest";
    }
    loadProfilePicture();
});

// Logout functionality
logoutBtn.addEventListener('click', () => {
    alert('Logging out...');
    localStorage.removeItem('username');
    window.location.href = 'login.html'; // Redirect to login page
});

function loadProfilePicture() {
    const username = localStorage.getItem("username");
    const profilePicUrl = localStorage.getItem("profilePic");

    if (profilePicUrl && username) {
        // Set the profile picture and username in the dashboard
       const profilePic= document.getElementById("profile-pic");
       profilePic.style.backgroundImage = `url(${profilePicUrl})`;
        document.getElementById("username").textContent = username;
    } else {
        // Fallback in case profilePicUrl or username is not found
        document.getElementById("profilePic").src = 'default-image.png';  // Fallback image
        document.getElementById("username").textContent = 'Guest';
    }
}
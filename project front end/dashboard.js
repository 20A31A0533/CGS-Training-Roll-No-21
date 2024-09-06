// JavaScript for toggling the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
}

// JavaScript for tab switching functionality
function showTab(tabName) {
    // Get all tab content and buttons
    const openTab = document.getElementById('open');
    const closedTab = document.getElementById('closed');
    const tabButtons = document.querySelectorAll('.tab-btn');

    // Hide both tabs first
    openTab.style.display = 'none';
    closedTab.style.display = 'none';

    // Remove the 'active' class from all buttons
    tabButtons.forEach((button) => {
        button.classList.remove('active');
    });

    // Show the correct tab content and add 'active' class to the clicked button
    if (tabName === 'open') {
        openTab.style.display = 'block';
        document.querySelector('button[onclick="showTab(\'open\')"]').classList.add('active');
    } else if (tabName === 'closed') {
        closedTab.style.display = 'block';
        document.querySelector('button[onclick="showTab(\'closed\')"]').classList.add('active');
    }
}

// Example JavaScript to log out (assuming the logout button image is clickable)
const logoutBtn = document.querySelector('.logout-btn');
logoutBtn.addEventListener('click', () => {
    // Add logout functionality here, such as redirecting to a login page
    alert("You have been logged out!");
});

// Optionally, you can add click functionality for the service boxes
document.getElementById('profile').addEventListener('click', () => {
    alert('Navigating to Personal Profile section');
});

document.getElementById('communication').addEventListener('click', () => {
    alert('Navigating to Communication Hub');
});

document.getElementById('billing').addEventListener('click', () => {
    alert('Navigating to Billing & Payment section');
});

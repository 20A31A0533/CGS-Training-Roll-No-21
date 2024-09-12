const users = [
    {
        "username": "SURYA",
        "email": "surya@gmail.com",
        "password": "abc123",
        "role": "admin",
        "profilePic": "./assets/surya.jpeg"  
    },
    {
        "username": "SUNANDA",
        "email": "sunanda@gmail.com",
        "password": "abc@123",
        "role": "user",
        "profilePic": "./assets/sunnu.jpeg"
    },
    {
        "username": "RAHUL",
        "email": "rahul@gmail.com",
        "password": "abc@1234",
        "role": "admin",
        "profilePic": "./assets/rahul.jpeg"  
    },
    {
        "username": "ANU PARVATI",
        "email": "parvati@gmail.com",
        "password": "abc@12345",
        "role": "admin",
        "profilePic": "./assets/anu.jpeg"  
    },
    {
        "username": "NANDU",
        "email": "nandu@gmail.com",
        "password": "abc@123456",
        "role": "user",
        "profilePic": "./assets/nandu.jpeg"  
    },
    {
        "username": "REVANTH",
        "email": "revanth@gmail.com",
        "password": "abc@1234567",
        "role": "user",
        "profilePic": "./assets/revanth.jpeg"  
    },
    {
        "username": "SAMPATH",
        "email": "sampath@gmail.com",
        "password": "4BPCcvcs",
        "role": "user",
        "profilePic": "./assets/sampath.jpeg" 
    },
    {
        "username": "LOKESH",
        "email": "lokesh@gmail.com",
        "password": "VKiLLHe6",
        "role": "user",
        "profilePic": "./assets/lokesh.jpeg" 
    },
    {
        "username": "SUBBARAO",
        "email": "subbararo@gmail.com",
        "password": "KNu9bRRC",
        "role": "user",
        "profilePic": "./assets/subbarao.jpeg"  
    },
    {
        "username": "MANIKYA",
        "email": "manikya@gmail.com",
        "password": "p8b5XtdE",
        "role": "user",
        "profilePic": "./assets/manikya.jpeg" 
    }
];

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = document.getElementById("loginForm");

    const useremailField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const alertSlider = document.getElementById('alertSlider');
    const role = form.role.value;

    let email = useremailField.value;
    let password = passwordField.value;
    let user = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            user = users[i];
            break;
        }
    }

    if (user != null) {
        if (user.role === role && password === user.password) {
            passwordError.textContent = '';
            showAlert("Login Successful", "alert-success");

            localStorage.setItem("username", user.username);
            let profilePicUrl = user.profilePic || 'default-image.png';  
            localStorage.setItem("profilePic", profilePicUrl);  

            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 1000);
        } else {
            passwordError.textContent = 'Invalid credentials.';
            showAlert("Login Failed", "alert-failure");
        }
    } else {
        passwordError.textContent = 'User not found.';
        showAlert("Login Failed", "alert-failure");
    }
});

function loadProfilePicture() {
    const username = localStorage.getItem("username");
    const profilePicUrl = localStorage.getItem("profilePic");

    if (profilePicUrl && username) {
        document.getElementById("profilePic").src = profilePicUrl;
        document.getElementById("username").textContent = username;
    } else {
        document.getElementById("profilePic").src = 'default-image.png';  
        document.getElementById("username").textContent = 'Guest';
    }
}

document.getElementById("createAccountLink").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("registrationContainer").style.display = "block";
});

function showAlert(message, alertClass) {
    const alertSlider = document.getElementById('alertSlider');
    alertSlider.innerHTML = message;
    alertSlider.classList.add(alertClass, 'show'); 
    setTimeout(() => {
        alertSlider.classList.remove('show', alertClass); 
    }, 3000);
}

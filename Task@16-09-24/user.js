document.getElementById('newUserBtn').addEventListener('click', getRandomUser);

async function getRandomUser() {
    try {
        document.getElementById('userName').innerText = "Loading...";

        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];

        document.getElementById('profileImage').src = user.picture.large;

        const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
        document.getElementById('userName').innerText = fullName;

        document.getElementById('userEmail').innerText = user.email;

        const dob = new Date(user.dob.date).toLocaleDateString();
        document.getElementById('userDOB').innerText = dob;

        document.getElementById('userGender').innerText = user.gender;

        document.getElementById('userPhone').innerText = user.phone;

        const address = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.country}`;
        document.getElementById('userAddress').innerText = address;
    } catch (error) {
        console.error('Error fetching user:', error);
        document.getElementById('userName').innerText = "Failed to load user.";
    }
}

getRandomUser();

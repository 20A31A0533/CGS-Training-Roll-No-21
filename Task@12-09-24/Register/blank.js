function nextStep(currentStep) {
    let inputId = '';
    switch (currentStep) {
        case 1:
            inputId = 'email';
            break;
        case 2:
            inputId = 'name';
            break;
        case 3:
            inputId = 'contact';
            break;
        case 4:
            inputId = 'userId';
            break;
    }

    const inputValue = document.getElementById(inputId).value;

    if (inputValue) {
        console.log(`${inputId}: ${inputValue}`); 
        displayEnteredData(inputId, inputValue); 
        document.getElementById(`step${currentStep}`).style.display = 'none'; 
        document.getElementById(`step${currentStep + 1}`).style.display = 'flex';
    } else {
        alert("Please fill in the field."); 
    }
}

function displayEnteredData(inputId, value) {
    
    const displayDiv = document.getElementById('displayData');
    displayDiv.style.display="block";

    const inputLabel = {
        'email': 'Email: ',
        'name': 'Name: ',
        'contact': 'Contact Number: ',
        'userId': 'User ID: ',
        'password': 'Password: '
    };

    const dataElement = document.createElement('p');
    dataElement.textContent = `${inputLabel[inputId]} ${value}`;
    displayDiv.appendChild(dataElement); 

    console.log(`Displayed: ${inputLabel[inputId]} ${value}`); 
}


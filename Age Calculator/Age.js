function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1;
    const year = parseInt(document.getElementById('year').value);

    const dob = new Date(year, month, day);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - dob.getFullYear();
    let months = currentDate.getMonth() - dob.getMonth();
    let days = currentDate.getDate() - dob.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        age--;
        months += 12;
    }

    if (days < 0) {
        const lastDayOfPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days += lastDayOfPrevMonth;
        months--;
    }

    document.getElementById('ageResult').textContent = `${age} years, ${months} months, ${days} days`;
}

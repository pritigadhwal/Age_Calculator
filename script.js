function calculateAge() {
    const birthdateInput = document.getElementById("birthdate").value;
    const birthdate = new Date(birthdateInput);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthdate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    const resultElement = document.getElementById("result");
    resultElement.innerText = `Your age is approximately ${ageInYears.toFixed(2)} years.`;
}

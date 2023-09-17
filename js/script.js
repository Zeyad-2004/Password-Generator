const passwordInput = document.querySelector('.password-box input'),
copyIcon = document.querySelector('.password-box .copy-icon'),
rangeInput = document.querySelector('.range-box input'),
sliderNumber = document.querySelector('.range-box .slider-number'),
generateButton = document.querySelector('.generate-button');

// String of All Characters
let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~";

// This function to Generate the Password by Random Characters
const generatePassword = () => {
    let newPassword = "";

    for (let i = 0; i < rangeInput.value; i++) {
        let randomNumber = Math.floor(Math.random() * allCharacters.length);  /* Search */
        newPassword += (allCharacters[randomNumber]);  /* Search */
    }
    copyIcon.classList.replace("uil-file-check-alt", "uil-copy");  /* Search */
    passwordInput.value = newPassword;
}

// This event appears value of the range slider
rangeInput.addEventListener('input', () => {
    sliderNumber.innerText = rangeInput.value;  /* Search */
    generatePassword();
})

// This event change the copy icon
copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value);  /* Search */
    copyIcon.classList.replace("uil-copy", "uil-file-check-alt");  /* Search */
})

// This event makes program generate the new Password
generateButton.addEventListener('click', generatePassword);

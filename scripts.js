const span = document.getElementById("a");
const form = document.getElementById("form");
const btnCopy = document.getElementById("btn-copy");
const inputLength = document.getElementById("input-pw-length");
const inputCharsUppercase = document.getElementById("uppercase-chars");
const inputCharsLowercase = document.getElementById("lowercase-chars");
const inputCharsNumber = document.getElementById("numbers-chars");
const inputCharsSpecial = document.getElementById("special-chars");
const showPassword = document.getElementById("show-password");

let pwLength;
let password = "";
let chars = "";
let charsNumbers = "0123456789";
let charsLowercase = "abcdefghijklmnopqrstuvwxyz";
let charsUppercase = "ABCDEFGHIJLMNOPQRSTUVWXYZ";
let charsSpecial = "!@#$%^&*()+?:{}[]";

inputLength.value = 8;

form.addEventListener("submit", (e) => {
  password = "";

  e.preventDefault();
  if (inputCharsUppercase.checked) chars += charsUppercase;
  if (inputCharsLowercase.checked) chars += charsLowercase;
  if (inputCharsNumber.checked) chars += charsNumbers;
  if (inputCharsSpecial.checked) chars += charsSpecial;

  if (inputLength.value >= 8 && inputLength.value <= 64) {
    pwLength = inputLength.value;

    for (let i = 0; i < pwLength; i++) {
      const randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    console.log(password);
    console.log(password.length);

    showPassword.innerHTML = String(password);
    console.log(showPassword.innerHTML);
    chars = "";
    password = "";
  }
});

btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(showPassword.innerHTML);
});

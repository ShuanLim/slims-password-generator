// Assignment code here

function generatePassword() {
  // User input
  var passwordLength;
  var lowercaseInput;
  var uppercaseInput;
  var numericInput;
  var specialInput;

  // variable to store all of the possible, selected characters.
  var charactersPool = "";

  // variable to store the generated password.
  var password = "";

  // prompt for the password's length.
  do {
    passwordLength = prompt("Enter a number to denote the password's length, between 8-128 characters");

    // ensure passwordLength is an integer.
    passwordLength = parseInt(passwordLength);

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Error: Please enter a password length between 8 and 128 characters inclusive.")
    }
  }
  // ensure the password length is a number between 8 and 128.
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);
  // end of password length prompt.

  // prompt for lowercase letters.
  do {
    lowercaseInput = prompt("Do you want lowercase characters in your password?\n" +
      "Type 'yes' or 'no'. For example: yes");

    // convert user input to all lowercase to validate.
    lowercaseInput = lowercaseInput.toLowerCase();

    if (lowercaseInput !== "yes" && lowercaseInput !== "no") {
      alert("Error: Please enter 'yes' or 'no'.");
    }
  }
  // ensure the user inputs 'yes' or 'no'.
  while (lowercaseInput !== "yes" && lowercaseInput !== "no");
  // end of lowercase letters prompt.

  // prompt for uppercase letters.
  do {
    uppercaseInput = prompt("Do you want uppercase characters in your password?\n" +
      "Type 'yes' or 'no'. For example: yes");

    // convert user input to all lowercase to validate.
    uppercaseInput = uppercaseInput.toLowerCase();

    if (uppercaseInput !== "yes" && uppercaseInput !== "no") {
      alert("Error: Please enter 'yes' or 'no'.");
    }
  }
  // ensure the user inputs 'yes' or 'no'.
  while (uppercaseInput !== "yes" && uppercaseInput !== "no");
  // end of uppercase letters prompt.
  
  // prompt for numeric characters.
  do {
    numericInput = prompt("Do you want numeric characters in your password?\n" +
      "Type 'yes' or 'no'. For example: yes");

    // convert user input to all lowercase to validate.
    numericInput = numericInput.toLowerCase();

    if (numericInput !== "yes" && numericInput !== "no") {
      alert("Error: Please enter 'yes' or 'no'.");
    }
  }
  // ensure the user inputs 'yes' or 'no'.
  while (numericInput !== "yes" && numericInput !== "no");
  // end of numeric characters length prompt.

  // prompt for special characters.
  do {
    specialInput = prompt("Do you want special characters in your password?\n" +
      "Type 'yes' or 'no'. For example: yes");

    // convert user input to all lowercase to validate.
    specialInput = specialInput.toLowerCase();

    if (specialInput !== "yes" && specialInput !== "no") {
      alert("Error: Please enter 'yes' or 'no'.");
    }
  }
  // ensure the user inputs 'yes' or 'no'.
  while (specialInput !== "yes" && specialInput !== "no");
  // end of special characters prompt.
  


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

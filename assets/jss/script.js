// Assignment code here

function generatePassword() {
  // User input
  var passwordLength;
  var lowercaseInput;
  var uppercaseInput;
  var numericInput;
  var specialInput;

  // Variable to store all of the possible, selected characters.
  var charactersPool = "";

  // Variable to store the generated password.
  var password = "";


  


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

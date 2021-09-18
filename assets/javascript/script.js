// Assignment Code
var generateBtn = document.querySelector("#generate");

// Creates a unique password
function generatePassword() {
  console.log("Button was clicked.");

//  1. Series of prompts for password criteria
//    a. Password length: 8 < x < 128

var characterLimit = window.prompt("Please indicate desired length of generated password, between 8 and 128 characters.", 8);

if (characterLimit < 8 || characterLimit > 128 || characterLimit.includes(".") || isNaN(characterLimit)) {
  window.alert("Your response does not meet the requirements.");
  return;
};

//    b. Lowercase, uppercase, numeric, special characters

var chosenOptions = [];

var lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numericOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialOptions = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",];

var lowerCase = window.confirm("Would you like to include lowercase characters?");

var upperCase = window.confirm("Would you like to include uppercase characters?");

var numericChar = window.confirm("Would you like to include numeric values?");

var specialChar = window.confirm("Would you like to include special characters?");

if (lowerCase) {
  chosenOptions = chosenOptions.concat(lowerCaseOptions)
};

if (upperCase) {
  chosenOptions = chosenOptions.concat(upperCaseOptions)
};

if (numericChar) {
  chosenOptions = chosenOptions.concat(numericOptions)
};

if (specialChar) {
  chosenOptions = chosenOptions.concat(specialOptions)
};

if (chosenOptions.length === 0) {
  window.alert("Your response does not meet the requirements.");
  return;
};

//  2. Generate password that matches the selected criteria

var final = "";

function generator() {
  for(var i=0; i <= characterLimit; i++){
  final += chosenOptions[Math.floor(Math.random() * chosenOptions.length)]
}
};

generator();

console.log(final);

//  3. Validate the input

var finalArray = final.split("")

function validCheck(x,y) {
  for(var i=0; i < x.length; i++) {
    for(var j=0; j < y.length; j++) {
      if (x[i] === y[j]) {
        return true + x[i];
      }
    }
  } return false;
}

if (lowerCase && validCheck(finalArray, lowerCaseOptions) === false) {
  final = "";
  generator();
} else if (upperCase && validCheck(finalArray, upperCaseOptions) === false) {
  final = "";
  generator();
} else if (numericChar && validCheck(finalArray, numericOptions) === false) {
  final = "";
  generator();
} else if (specialChar && validCheck(finalArray, specialOptions) === false) {
  final = "";
  generator();
};

//  4. Display password to the page
  return final;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

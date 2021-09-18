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
  return ("");
};

//    b. Lowercase, uppercase, numeric, special characters

var chosenOptions = [];

var counter = 0;

var lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numericOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialOptions = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",];

var lowerCase = window.confirm("Would you like to include lowercase characters?");

var upperCase = window.confirm("Would you like to include uppercase characters?");

var numericChar = window.confirm("Would you like to include numeric values?");

var specialChar = window.confirm("Would you like to include special characters?");

var finalArray = [];

//  2. Validate the input

if (lowerCase) {
  chosenOptions = chosenOptions.concat(lowerCaseOptions);
  var randomLower = lowerCaseOptions[Math.floor(Math.random()*lowerCaseOptions.length)];
  finalArray.unshift(randomLower);
  counter++;
};

if (upperCase) {
  chosenOptions = chosenOptions.concat(upperCaseOptions);
  var randomUpper = upperCaseOptions[Math.floor(Math.random()*upperCaseOptions.length)];
  finalArray.unshift(randomUpper);
  counter++;
};

if (numericChar) {
  chosenOptions = chosenOptions.concat(numericOptions);
  var randomNumeric = numericOptions[Math.floor(Math.random()*numericOptions.length)];
  finalArray.unshift(randomNumeric);
  counter++;
};

if (specialChar) {
  chosenOptions = chosenOptions.concat(specialOptions);
  var randomSpecial = specialOptions[Math.floor(Math.random()*specialOptions.length)];
  finalArray.unshift(randomSpecial);
  counter++;
};

if (chosenOptions.length === 0) {
  window.alert("Your response does not meet the requirements.");
  return ("");
};

console.log(chosenOptions);
console.log(finalArray);
console.log(counter);

//  3. Generate password that matches the selected criteria

var finalString = finalArray.join("");

console.log(finalString);

function generator() {
  for(var i=0; i < characterLimit - counter; i++){
  finalString += chosenOptions[Math.floor(Math.random() * chosenOptions.length)]
}
};

generator();

console.log(finalString);

var randomArray = finalString.split('');

console.log(randomArray);

function randomize(randomArray) {
  var currentIndex = randomArray.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random()* currentIndex);
    currentIndex--;
    [randomArray[currentIndex], randomArray[randomIndex]] = [
      randomArray[randomIndex], randomArray[currentIndex]];
  }
  return randomArray
};

randomize(randomArray);

console.log(randomArray);

var finalPassword = randomArray.join("");

console.log(finalPassword);

//  4. Display password to the page
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

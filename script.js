// Set up password criteria object (global scope)
var criteria = {
  length: 0,
  lower: 'no',
  upper: 'no',
  numeric: 'no',
  special: 'no',
  // Determine validity of length. Note !this.length required for string inputs (i.e. NaN values)
  lengthIsValid: function(){
    if(this.length < 8 || this.length > 128 || !this.length){
      return false;
    } else {
      return true;
    }
  },
  // Determine validity of type selection
  typeIsValid: function(){
    if(this.lower !== 'yes' && this.upper !== 'yes' && this.numeric !== 'yes' && this.special !== 'yes'){
      return false;
    } else {
      return true;
    }
  }
}

// Set up arrays for characters
var charLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charNumeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var charSpecial = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
// charAll used to generate an array of all character types to be put into password
var charAll = [];

// Initialise the message for the password length & types
var lengthMessage = "Please select the desired legnth of the password by typing a value between 8 and 128";
var typeMessage = "Type yes to include or any other value to omit."

//  Capture and validate password length
function gatherLength(){
  criteria.length = parseInt(prompt(lengthMessage));
  while(!criteria.lengthIsValid()){
    criteria.length = prompt("Sorry, your selection is not valid. " + lengthMessage);
  }
}

// Capture and validate character types
function gatherType(){
  criteria.lower = prompt("Would you like to include lower case characters? " + typeMessage).toLowerCase();
  criteria.upper = prompt("Would you like to include upper case characters? " + typeMessage).toLowerCase();
  criteria.numeric = prompt("Would you like to include numeric characters? " + typeMessage).toLowerCase();
  criteria.special = prompt("Would you like to include special characters? " + typeMessage).toLowerCase();
  while(!criteria.typeIsValid()){
    alert("You must select at least one type of character.");
    criteria.lower = prompt("Would you like to include lower case characters? " + typeMessage).toLowerCase();
    criteria.upper = prompt("Would you like to include upper case characters? " + typeMessage).toLowerCase();
    criteria.numeric = prompt("Would you like to include numeric characters? " + typeMessage).toLowerCase();
    criteria.special = prompt("Would you like to include special characters? " + typeMessage).toLowerCase();
  }
}

// Create master character array based on selections
function setCharacters() {
  if (criteria.lower == 'yes'){
    charAll.push(charLower);
  }
  if (criteria.upper == 'yes'){
    charAll.push(charUpper);
  }
  if (criteria.numeric == 'yes'){
    charAll.push(charNumeric);
  }
  if (criteria.special == 'yes'){
    charAll.push(charSpecial);
  }
}

// Generate password function
function generatePassword() {
  gatherLength();
  gatherType();
  setCharacters();
  var tempString = '';
  for (let i = 0; i < criteria.length; i++){
    tempString = tempString.concat(charLower[Math.floor(Math.random() * charLower.length)]);
  }
  return tempString
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
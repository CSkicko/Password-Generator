// Set up password criteria object
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

// Initialise the message for the password length & types
var lengthMessage = "Please select the desired legnth of the password by typing a value between 8 and 128";
var typeMessage = "Type yes to include or any other value to omit."

function gatherInput(){
  // Assign initial desired length
  criteria.length = parseInt(prompt(lengthMessage));
  // Validate and reassign length until valid input received
  while(!criteria.lengthIsValid()){
    criteria.length = prompt("Sorry, your selection is not valid. " + lengthMessage);
  }
  // Assign initial desired types
  criteria.lower = prompt("Would you like to include lower case characters? " + typeMessage);
  criteria.upper = prompt("Would you like to include upper case characters? " + typeMessage);
  criteria.numeric = prompt("Would you like to include numeric characters? " + typeMessage);
  criteria.special = prompt("Would you like to include special characters? " + typeMessage);
  // Validate and reassign types until valid input received
  while(!criteria.typeIsValid()){
    alert("You must select at least one type of character.");
    criteria.lower = prompt("Would you like to include lower case characters? " + typeMessage);
    criteria.upper = prompt("Would you like to include upper case characters? " + typeMessage);
    criteria.numeric = prompt("Would you like to include numeric characters? " + typeMessage);
    criteria.special = prompt("Would you like to include special characters? " + typeMessage);
  }
}

function generatePassword() {
  gatherInput();
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
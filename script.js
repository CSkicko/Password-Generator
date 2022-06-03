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

// Initialise the message for the password length
var lengthMessage = "Please select the desired legnth of the password by typing a value between 8 and 128";

function generatePassword() {
  criteria.length = parseInt(prompt(lengthMessage));
  while(!criteria.lengthIsValid()){
    criteria.length = prompt("Sorry, your selection is not valid. " + lengthMessage);
  }
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
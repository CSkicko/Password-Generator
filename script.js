// Set up password criteria object
var criteria = {
  length: 0,
  lower: false,
  upper: false,
  numeric: false,
  special: false,
  // Determine validity of length
  lengthIsValid: function(){
    if(this.length < 8 || this.length > 128){
      return false;
    } else {
      return true;
    }
  },
  // Determine validity of type selection
  typeIsValid: function(){
    if(!this.lower && !this.upper && !this.numeric && !this.special){
      return false;
    } else {
      return true;
    }
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
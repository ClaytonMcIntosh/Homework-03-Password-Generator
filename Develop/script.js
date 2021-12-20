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


// A function to systematically create a password using a series of functions. Each function returns a value that passes to the next function.
function generatePassword(){
  lengthP = lengthGet();
  stringP = stringGet(lengthP);
  firstPass = passGet(stringP); 
  refinedPass = passwordRefined(firstPass);
  return refinedPass;
 }

// Variables declared so they can be accessed globally
let lowerCaseReq = false;
let upperCaseReq = false;
let numericReq = false;
let specialReq = false;
let passwordJ = false;
let longStringName = "";
let passwordLength = "";

//function to prompt user for how long they want their password to be. This returns a number that becomes the length of the password
function lengthGet(x){
  passwordLength = prompt("Choose password length. \n (It must be between 8 and 128 characters.)")
  if(isNaN(passwordLength)){
    alert("That is not a number");
    return generatePassword();
  }
  else if(passwordLength < 8 || passwordLength > 128){
    alert("You must have between 8 and 128 characters.");
    return generatePassword();
  }
  else{
    return x;
  }
}

//This function adds the characters requested to a string. The string is returned to be used for generating the random password
function stringGet(){
  longStringName = "";
  lowerCaseReq = confirm("Do you require lowercase letters?");
    if(lowerCaseReq === true){
      longStringName = longStringName+"abcdefghijklmnopqrstuvwxyz";
    }
  upperCaseReq = confirm("Do you require uppercase letters?");
    if(upperCaseReq === true){
      longStringName = longStringName+"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  numericReq = confirm("Do you require numbers?");
    if(numericReq === true){
      longStringName = longStringName+"0123456789";
    }
  specialReq = confirm("Do you require special characters?");
    if(specialReq === true){
    longStringName = longStringName+"!@,#$%&*{}/+=";
   }
     return longStringName;
  }

  //This funtion ensures at least one type of characters has been selected. It then takes the long string of characters created above and chooses random characters to create a password with the correct number of characters.
function passGet(x){
  if (specialReq === false && numericReq === false && upperCaseReq === false && lowerCaseReq === false) {
    alert("Please choose some kind of character. I recommend choosing them all!");
    return stringGet()
  }
      else {
    function passJumb(length, chars) {
      var passwordJ = '';
      for (var i = length; i > 0; --i) passwordJ += chars[Math.floor(Math.random() * chars.length)];
      return passwordJ
    }
    
    pJumb = passJumb(passwordLength, x);
    return pJumb ;
  }
}

//This function checks to see of each character set selected appears in the password. If not it generates a new password and tests again.
function passwordRefined(x){
    if (lowerCaseReq === true && /[a-z]/.test(x) || lowerCaseReq === false){
    }
    else {
       y = passGet(longStringName);
      passwordRefined(y);
      return y;   
    }
    if (upperCaseReq === true && /[A-Z]/.test(x) || upperCaseReq === false){
    }
    else {
      y = passGet(longStringName);
      passwordRefined(y);
      return y;   
    }
    if (numericReq === true && /[0-9]/.test(x) || numericReq === false){
       }
    else {
      y = passGet(longStringName);
      passwordRefined(y);
      return y;   
    }
    if (specialReq === true && /[!@,#$%&*{}/+=]/.test(x) || specialReq === false){
      return x;
       }
    else {
       y = passGet(longStringName);
      passwordRefined(y);
      return y;   
    }
}


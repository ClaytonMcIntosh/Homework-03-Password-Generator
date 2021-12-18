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


//function to generate the password.
function generatePassword(){
  let passwordLength = prompt("Choose password length. \n (It must be between 8 and 128 characters.)")
  if(isNaN(passwordLength)){
    alert("That is not a number");
    return generatePassword();
  }
  else if(passwordLength < 8 || passwordLength > 128){
    alert("You must have between 8 and 128 characters.");
    return generatePassword();
  }
   else{
    console.log(passwordLength);
  }
  let lowerCaseReq = confirm("Do you require lowercase letters?")
  console.log("Lowercase required =" + lowerCaseReq);
  let upperCaseReq = confirm("Do you require uppercase letters?")
  console.log("Uppercase required =" + upperCaseReq)
  let numericReq = confirm("Do you require numbers?")
  console.log("Numbers required =" + numericReq)
}













// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

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



function generatePassword(){

 refinedPass = passwordGet();

  return refinedPass

}



function passwordGet(){

  longStringName = "";
  passwordLength = prompt("Choose password length. \n (It must be between 8 and 128 characters.)")
  if(isNaN(passwordLength)){
    alert("That is not a number");
    return generatePassword();
  }
  else if(passwordLength < 8 || passwordLength > 128){
    alert("You must have between 8 and 128 characters.");
    return generatePassword();
  }
  let lowerCaseReq = confirm("Do you require lowercase letters?")
    if(lowerCaseReq === true){
      longStringName = longStringName+"abcdefghijklmnopqrstuvwxyz";
    }
  let upperCaseReq = confirm("Do you require uppercase letters?")
    if(upperCaseReq === true){
      longStringName = longStringName+"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  let numericReq = confirm("Do you require numbers?")
    if(numericReq === true){
      longStringName = longStringName+"0123456789";
    }
  let specialReq = confirm("Do you require special characters?")
  if(specialReq === true){
    longStringName = longStringName+"!@,#$%&*{}/+=";
   }

  if (specialReq === false && numericReq === false && upperCaseReq === false && lowerCaseReq === false) {
    alert("Please choose some kind of character. I recommend choosing them all!");
    return generatePassword();}

    else {
    function passJumb(length, chars) {
      var passwordJ = '';
      for (var i = length; i > 0; --i) passwordJ += chars[Math.floor(Math.random() * chars.length)];
      return passwordJ
     }
    
  pJumb = passJumb(passwordLength, longStringName);
  return pJumb 
  
  }
  }



        // if (lowerCaseReq === true && /[a-z]/.test(passwordJ)){
        //   console.log("aa");
        // }
        // else {
        //   alert("Try again");
        //           }
        // if (upperCaseReq === true && /[A-Z]/.test(passwordJ)){
        //   console.log("AB");
        // }

        // else {
        //   alert("Try again");
        //          }


        // if (numericReq === true && /[0-9]/.test(passwordJ)){
        //   console.log("1231232");
        // }

        // else {
        //   alert("Try again");
        //          }

        // if (specialReq === true && /[!@,#$%&*{}]/.test(passwordJ)){
        //   console.log("!@,#$%&*{}");
        // }
        // else {
        //   alert("Try again");
        //          }

    











//  //This function checks to see if any character is missing 

 



// function charCheck(pJumb) {

// }




// function charCheck(x) 
//   var passP = "";
//   {
//     if (lowerCaseReq === true && /[a-z]/.test(x)){
//       console.log("A");
//     }
//     else if (upperCaseReq === true && /[A-Z]/.test(x)){
//       console.log("B");
//     }
//     else if (numericReq === true && /[0-9]/.test(x)){
//     console.log("C");
  
//   }
// else {
//   console.log("Try again");
// }
// }
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

  lengthP = lengthGet();

  stringP = stringGet(lengthP);

  firstPass = passGet(stringP);
 
  refinedPass = passwordRefined(firstPass);

  return refinedPass;

 }

let lowerCaseReq = false;
let upperCaseReq = false;
let numericReq = false;
let specialReq = false;
let passwordJ = false;
let longStringName = "";
let passwordLength = "";

function lengthGet(){
  passwordLength = prompt("Choose password length. \n (It must be between 8 and 128 characters.)")
  if(isNaN(passwordLength)){
    alert("That is not a number");
    return generatePassword();
  }
  else if(passwordLength < 8 || passwordLength > 128){
    alert("You must have between 8 and 128 characters.");
    return generatePassword();
  }
}

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
   console.log(longStringName);
   return longStringName;
  }

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

function passwordRefined(x){

  console.log(x);
    if (lowerCaseReq === true && /[a-z]/.test(x) || lowerCaseReq === false){
    console.log("aa");
    }

    else {
      console.log("aaaaaaaaaaa")
      y = passGet(longStringName);
      passwordRefined(y);
      return y;   
    }
    if (upperCaseReq === true && /[A-Z]/.test(x) || upperCaseReq === false){
      console.log("AA");
    }
    else {
      console.log("AAAAAAAAAA")
      y = passGet(longStringName);
      passwordRefined(y);
      return y;   
    }
    if (numericReq === true && /[0-9]/.test(x) || numericReq === false){
      console.log("11");
       }
    else {
      console.log("111111111")
      y = passGet(longStringName);
      passwordRefined(y);
      return y;   
    }
    if (specialReq === true && /[!@,#$%&*{}/+=]/.test(x) || specialReq === false){
      console.log("**");
      return x;
       }
    else {
      console.log("!@,#$%&*{}/+=")
      y = passGet(longStringName);
      passwordRefined(y);
      return y;   
    }
   
   

}




// console.log(x);
// if (lowerCaseReq === true && /[a-z]/.test(x)){
// console.log("aa");
// }
// else if (lowerCaseReq === false) {
//   console.log("aaNOTNEEDED");
// return x;
// }
//  else {
//   console.log("Woooooo")
//   y = passGet(longStringName);
//   passwordRefined(y);
//   return y;
// }







// console.log(x);
// if (lowerCaseReq === true && /[a-z]/.test(x)){
// console.log("aa");
// return x;
// }
// else {
//   console.log("nup");
//   x = false;
//   return x;
// }






// if (x = false) {
//   console.log("Yabba dabba do");
//   firstPass = passGet(stringP);
//   refinedPass = passwordRefined(firstPass);
//   return refinedPass
// }

// else {
//   console.log("Tick tock")
//   return refinedPass
// }



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
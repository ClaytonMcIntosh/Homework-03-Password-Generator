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

let passwordLength = "";
var longStringName = "";

//function to generate the password. 
function generatePassword(){
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
   else{
    console.log(passwordLength);
  }
  let lowerCaseReq = confirm("Do you require lowercase letters?")
    if(lowerCaseReq === true){
      longStringName = longStringName+"abcdefghijklmnopqrstuvwxyz";
      console.log(longStringName);
    }
  let upperCaseReq = confirm("Do you require uppercase letters?")
    if(upperCaseReq === true){
      longStringName = longStringName+"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      console.log(longStringName);
    }
  let numericReq = confirm("Do you require numbers?")
    if(numericReq === true){
      longStringName = longStringName+"0123456789";
      console.log(longStringName);
    }
  let specialReq = confirm("Do you require special characters?")
  if(specialReq === true){
    longStringName = longStringName+"!@,#$%&*{}[]/+=";
    console.log(longStringName);
  }
  function passJumb(length, chars) {
    var password = '';
    for (var i = length; i > 0; --i) password += chars[Math.floor(Math.random() * chars.length)];
    return password;
  }
  pJumb = passJumb(passwordLength, longStringName);
  
 console.log(pJumb);

 

}





// function passJumb(length, chars) {
//   var password = '';
//   for (var i = length; i > 0; --i) password += chars[Math.floor(Math.random() * chars.length)];
//   return password;
// }
// var pJumb = passJumb(128, longStringName);

// console.log(pJumb);





//Attempting to build a pool of characters for randomization

// var randomString = "";
// var lowerCaseV = "abcdefghijklmnopqrstuvwxyz";
// var upperCaseV = "ABCDEFGHIJKLMNOPQRSTUVWXY";
// var numbersV = "0123456789";
// var specialCharV = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// if (lowerCaseReq == true){
// randomString.push(akjsdhfksajdfh)
// console.log(randomString)
// }




//Attempting to build a function that will add a random character, and stop when it creates the length of the string (or array or whatever)


// function createPass (x, y) {
//   var resultofPass = '';
//   for (var i = x; i > 0; --i) resultofPass += y[Math.floor(Math.random()) * chars.length];
//   return resultofPass;
// }
// var passCreated = createPass (100, 'abcdefghijklmn')
// console.log(createPass());




// function passwordCreate(length) {
//   var result = "";
//   var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var characterLength = characters,length;
//   for (var x = 0; x < length x++){
//     result += characters.charAt(Math.floor(Math.random() * characterLength));
//   }
//   return result;

// }
//     console.log(passwordCreate.);



// console.log(passwordLength);
// var passwordTest = [0];
// if (passwordLength.length() > passwordTest.length()){
//   passwordTest.push();
//   console.log(passwordTest);
//  }


// function createPass (x, y) {
//   var resultofPass = "";
//   for (var i = x; i > 0; --i) resultofPass += y[Math.floor(Math.random()) * y.length];
//   return resultofPass;
// }
// var passCreated = createPass (128, "asdasd")

// console.log(createPass());








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

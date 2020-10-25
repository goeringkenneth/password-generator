
// Assignment Code
var generateBtn = document.querySelector("#generate");
var letter = ["a","b","c","1","2","3","10","30","!","@","#"];
var newPassword="";

// Write password to the #password input
function writePassword() {
  // var newPassword = generatePassword();
  for (var i = 0; i <8; i++) {
    letterIndex=Math.floor(Math.random() * letter.length);
   
   
       newPassword=newPassword+letter[letterIndex];
      //  console.log(newPassword)
      //  ammend #password
  var newPassword = document.querySelector("#password");

  // passwordText.value = password;

       
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword)
   

}}
generateBtn.addEventListener("click", writePassword)
// var letter = ["a","b","c","1","2","3","10","30","!","@","#"];
// var newPassword="";

// for (var i = 0; i <8; i++) {
//  letterIndex=Math.floor(Math.random() * letter.length);


//     newPassword=newPassword+letter[letterIndex];


// }
// var newPassword = document.querySelector("#password");
console.log(newPassword)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
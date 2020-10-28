
// Assignment Code
var generateBtn = document.querySelector("#generate");
var letter = ["a","b","c","e","f","1","2","3","10","30","!","@","#","A","B","C","D","E","F"];
var newPassword="";

// Write FUNCTION  to SELECT #password in DOM. 
  function writePassword() {
    newPassword="";
    var password = generatePassword();
    var passwordText= document.querySelector("#password");
    passwordText.value=password;
    // console.log(passwordText)
  }

// Write FUNCTION to generate newPassword from Array
function generatePassword(){
  //PROMT USER to pick a number between 8-128
  const passwordLength=prompt('Pick a number between 8-128')
  //fOR LOOP to create how long the newPassword will be
  for  (let i = 0; (newPassword.length < passwordLength && 8 
    <= passwordLength && passwordLength <= 128); i++){
      //math for selcting random strings in the array
      letterIndex=Math.floor(Math.random() * letter.length);
      newPassword=newPassword+letter[letterIndex];
      // console.log(newPassword);
    }
    //RETURN newPassword to #password
    console.log(newPassword)
      return newPassword;
      
    }
    
    
    generateBtn.addEventListener("click", writePassword)


// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ["!","@","#","$","%","^","&","*",];

function generatePassword() {
  var passwordPool = [];
  var randPass = '';
  var length = prompt("Choose a length from 8 to 128 characters");

  if (length >= 8 && length <= 128){
    var lowerCase = confirm("Do you want lowercase letters?");
    var upperCase = confirm("Do you want uppercase letters?");
    var specialChar = confirm("Do you want special characters?");
    console.log(lowerCase);
    if (lowerCase === true){
      passwordPool = passwordPool.concat(upperChar);
      console.log(passwordPool);
    }
    if (upperCase === true) {
      passwordPool = passwordPool.concat(lowerChar);
    }
  
    if (specialChar === true) {
      passwordPool = passwordPool.concat(special);
    }
    if (lowerChar === false || upperChar === false || special === false)
    {
      alert("You must select at least one character type to be included in the password.");
    }
    for (var i = 0; i < length; i++){
      var randomInd = Math.floor(Math.random()*passwordPool.length);
      randPass += passwordPool[randomInd];
      
    } 
  }
  else {
    alert("Password length must be at least 8 and up to 128.")
  }
  alert("Your password is " + randPass);
  return randPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(typeof (password));
  //var passwordText = document.querySelector(password);
  
  document.getElementById("textarea").textContent = password;

}


// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
// password criteria for generation
var generateBtn = document.querySelector("#generate");
var numberOptions = ["0","1","2","3","4","5","6","7","8","9"]
var lowercaseOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseOptions = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specialcharactersOptions = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","[","{","]","}",":",";","'",",","<",".",">","?","/",",","|"]

//click generate I get a series of prompts
//user chooses number of characters from min 8 to max 128
//user is then prompted to choose whether or not to include lowercase, uppercase, numeric, and/or special characters
//user answers each
//generator then validates their input and generates a password that meets the selected criteria

function generatePassword() {
  var generatePassword="";
  var numberOfCharacters=prompt("How many characters in your passowrd?");
  var includeSpecialCharacters=confirm("Do you want to add special characters?");
  var includelowercaseLetters=confirm("Do you want to include lower case letters?")
  var includeuppercaseLetters=confirm("Do you want to include upper case letters?")
  var includenumbers=confirm("Do you want to include numbers?")
  return generatePassword;
}

{8} min 
{128} max 

function getRandomNumber(min,max) {
  var randomNumber=Math.random()
  var randomNumberUpToMax=randomNumber * max
  var randomNumberInRange= min + randomNumberUpToMax;

  return Math.floor(randomNumberInRange);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

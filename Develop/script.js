var generateBtn = document.querySelector("#generate");
var numberOptions = ["0","1","2","3","4","5","6","7","8","9"]
var lowercaseOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseOptions = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specialcharactersOptions = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","[","{","]","}",":",";","'",",","<",".",">","?","/",",","|"]



function generatePassword() {
  var generatedPassword = "";
  var numberOfCharacters = prompt("How many characters in your password?");
  numberOfCharacters = parseInt(numberOfCharacters);

  if (isNaN(numberOfCharacters) || numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  var includeSpecialCharacters = confirm("Do you want to add special characters?");
  var includeLowercaseLetters = confirm("Do you want to include lowercase letters?");
  var includeUppercaseLetters = confirm("Do you want to include uppercase letters?");
  var includeNumbers = confirm("Do you want to include numbers?");

  if (!includeSpecialCharacters && !includeLowercaseLetters && !includeUppercaseLetters && !includeNumbers) {
    alert("At least one character type should be selected.");
    return "";
  }

  var allOptions = "";
  if (includeSpecialCharacters) {
    allOptions += specialcharactersOptions.join("");
  }
  if (includeLowercaseLetters) {
    allOptions += lowercaseOptions.join("");
  }
  if (includeUppercaseLetters) {
    allOptions += uppercaseOptions.join("");
  }
  if (includeNumbers) {
    allOptions += numberOptions.join("");
  }

  for (var i = 0; i < numberOfCharacters; i++) {
    var randomIndex = getRandomNumber(0, allOptions.length);
    generatedPassword += allOptions[randomIndex];
  }

  return generatedPassword;
}

function getRandomNumber(min, max) {
  var randomNumber = Math.random();
  var randomNumberUpToMax = randomNumber * max;
  var randomNumberInRange = min + randomNumberUpToMax;

  return Math.floor(randomNumberInRange);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

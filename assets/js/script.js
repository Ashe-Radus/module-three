// Assignment Code
var generateBtn = document.querySelector("#generate");
//var for all options for password
var numbers = "0123456789";
var uppercase = "abcdefghijklmnopqrstuvwxyz";
var lowercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var symbols = "~!@#$%^&*";
var password = "";
// console log to see if they populate in code
console.log(numbers);
console.log(uppercase);
console.log(lowercase);
console.log(symbols);

// window prompts to see what some one would like in their password creates yes /no prompt
let input = prompt("Would you like numbers in your password?");
prompt("Would you like symbols in your password?");
prompt("Would you like lowercase letters in your password?");
prompt("Would you like upper case letters in your password?");
console.log(input);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//should return the password. 
console.log(generatePassword);
//if input equals yes then loop over var numbers string, if statements for each . 


// declare variable for each one, empty string, below that will be a for loop. 
//each will have its own for loop inside the generate 
//console log will help show it is working. 
function generatePassword() {
  var randomnumbers = "";
  if (input == "yes") {
    for (let i = 0; i <= 10; i++) {
      randomnumbers += numbers.charAt(Math.floor(Math.random() * randomnumbers.length));
    }
    console.log(randomnumbers);

  }
  var uppercaseletter = "";
  if (input == "yes") {
    for (let i = 0; i <= 26; i++) {
      uppercaseletter += uppercase.charAt(Math.floor(Math.random() * uppercaseletter.length));
    }
    console.log(uppercaseletter);
  }
  var lowercaseletter = "";
  if (input == "yes") {
    for (let i = 0; i <= 26; i++) {
      lowercaseletter += lowercase.charAt(Math.floor(Math.random() * lowercaseletter.length));
    }
    console.log(lowercaseletter);
  }
  var character = "";
  if (input == "yes") {
    for (let i = 0; i <= 9; i++) {
      character += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    console.log(character);
  }

  var printpassword = [randomnumbers + uppercaseletter + lowercaseletter + character].join();
  // console log to see if it works. 
  console.log(printpassword);
  //return will generate password into the box
  return printpassword;
}

// each click does give a new password. 

document.getElementById("password").value = password;
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


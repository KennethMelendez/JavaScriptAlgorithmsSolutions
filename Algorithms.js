/*=========================================================================================================================
    The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
    You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already 
    defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. 
    Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
========================================================================================================================*/

function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

convertToF(30);

/*=================================================================
    Reverse the provided string.
    You may need to turn the string into an array 
    before you can reverse it.
    Your result must be a string.
==================================================================*/

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
reverseString("hello");

/*===================================================

Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of 
all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.

====================================================*/

function factorialize(num) {
    let multiplier = 1;
    let result = 1;
  
    while(multiplier <= num){
      result*=multiplier;
      multiplier++;
    }
    return result;
  }
  
  factorialize(5);


/*=======================================================================
    Return the length of the longest word in the provided sentence.
    Your response should be a number.
=======================================================================*/

function findLongestWordLength(str) {
  let words = str.split(" ");
  let longestWordLength = 0;
  let currentWordLength = 0;

  words.forEach(word => {
    currentWordLength = word.split("").length;
    if (currentWordLength >= longestWordLength) {
      longestWordLength = currentWordLength;
    }
  });

  return longestWordLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

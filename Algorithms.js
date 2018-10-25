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

  while (multiplier <= num) {
    result *= multiplier;
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

/*==============================================================================================
    Return an array consisting of the largest number from each 
    provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
    Remember, you can iterate through an array with a simple for loop, and access each member 
    with array syntax arr[i].   
=============================================================================================*/

function largestOfFour(arr) {
  let largestNumbersArray = new Array();

  arr.forEach(childArray => {
    let currentLargeNum = childArray[0];
    childArray.forEach(num => {
      if (num >= currentLargeNum) {
        currentLargeNum = num;
      }
    });
    largestNumbersArray.push(currentLargeNum);
  });
  return largestNumbersArray;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

/*=========================================================================================================
    Check if a string (first argument, str) ends with the given target string (second argument, target).
    This challenge can be solved with the .endsWith() method, which was introduced in 
    ES2015. But for the purpose of this challenge, we would like you to use 
    one of the JavaScript substring methods instead.
========================================================================================================*/

function confirmEnding(str, target) {
  let endStr = str.substring(str.split("").length - target.length);
  console.log(endStr);
  return endStr === target;
}

confirmEnding("Bastian", "n");

/*================================================================================
  Repeat a given string str (first argument) for num times 
  (second argument). Return an empty string if num is not a positive number.
 ===============================================================================*/

function repeatStringNumTimes(str, num) {
  let result = "";
  for (let x = 1; x <= num; x++) {
    result += str;
  }
  return result;
}

repeatStringNumTimes("abc", 3);

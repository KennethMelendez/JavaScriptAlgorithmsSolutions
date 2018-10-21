function findLongestWordLength(str) {
    let words = str.split(' ');
    let longestWordLength = 0;
    let currentWordLength = 0;
  
    words.forEach(word => {
      currentWordLength = word.split('').length;
      if (currentWordLength >= longestWordLength){
        longestWordLength = currentWordLength;
      }
    });
  
    return longestWordLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

  
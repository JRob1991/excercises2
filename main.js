// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y) {
  if (x > y) {
    return x;
  }
  else if (y > x) {
    return y;
  }
  else {
    return null;
  }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){
  if (x > y && x > z) {
    return x;
  }
  else if (y > x && y > z) {
    return y;
  }
  else (z > x && z > y){
    return z;
  }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {  //...
    return true;
  }
  else {
    return false;
  }
}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
  var result = '';
  for (var i = 0, len = phrase.length; i < len; i++) {
    // get current letter you are on in loop
    var letter = phrase[i];
    if (!isVowel(letter) && letter !== ' ') {
      // do something with consonant
      var double = letter + 'o' + letter;
      result += double;
    }
    else {
      result += letter;
    }
  }
  return result;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

//splits string into array, reverse method, then returns joined array
function reverse(s) {
  return s.split('').reverse().join('');
}


// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------


function findLongestWord(words) {
  var len = 0;
  words.forEach(function(word){
    if (word.length > len) {
      len = word.length;
    }
  });
  return len; 
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i) {
  return words.filter(function (word){
    return word.length > i;
  });
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
  var arrString = string.split('');
  return arrString.reduce(function(obj, letter){
    if (!obj[letter]) {
      obj[letter] = 0;
    } 
    obj[letter]++;
    return obj;
  }, {})  
}
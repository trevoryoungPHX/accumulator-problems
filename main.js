/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been completed for you.

*/

function test() {
 var string ="This Works!";
 return string;
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them.

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)

NOTE: always look at the test results to see further details about what the test is expecting.
For example, the tests require that to complete this challenge, your function must return
0 if the input is empty. Please see the README file for an explanation of how to expand the test
results on the index page in the browser.
*/


var numbers = [1, 5, 7, 3, 8, 9];

function sum(arr) {
 var total=0;
 for (i=0; i<arr.length; i++) {
 total+=arr[i];
 }
return total;
}

sum(arr);

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/

var str = "abc";
function doubleLetters(str) {
  var doubled = "";
for(var i = 0; i < str.length; i++){
   doubled += str[i] + str[i];
}
return doubled;
}

doubleLetters(str)


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/


var numbers = [1, 5, 7, 3, 8, 9];

function doubleNumbers(arr) {
    for (var i=0; i<arr.length; i++) {
     arr[i] *= 2
 }
return arr;
}

doubleNumbers(numbers);






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/




var numbers = [1, 5, 7, 3, 8, 9];

function multiplyNumbers(arr, number) {
    for (var i=0; i<arr.length; i++) {
     arr[i] *= number
 }
return arr;
}

multiplyNumbers(numbers, 4);





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/

var array1 = ["a", "b", "c"];
var array2 = ["d", "e", "f"];

function interleave(array1, array2) {
    var c = [];
    for (var i = 0; i < array1.length; i++) {
        c.push(array1[i], array2[i]);
    }
    return c;
}
interleave(array1, array2)


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/


function createRange(number, value) {
  var arr = [];
  for (var i = 0; i < number; i++) {
    arr.push(value);
  }
  return arr;
}

createRange(5, "Hello")



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/


var array = ["quick", "brown", "fox"]
function flipArray(array) {
  var newObject ={};
  for (var i=0; i<array.length; i++) {
    newObject[array[i]] = i;
  }
  return newObject;
}

flipArray(array)
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/



var array = [[2014, "Horse"], [2015, "Sheep"]];
function arraysToObject(array) {
  var object = {};
  for (var i = 0; i < array.length; i++) {
    object[array[i][0]] = array[i][1];
  }
  return object;
}

arraysToObject(array);



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/

var str= "Trevor"
function reverseString(str) {
  var newStr = "";
  for (var i = str.length-1; i>=0; i--) {
    newStr += str[i];
  }
   return newStr;
}
reverseString(str);

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/


str = "hahah"
function repeats(str) {
  var mid = Math.floor(str.length/2)
  var newStr = str.slice(0, mid);
  var secondStr = str.slice(mid);
  if (newStr === secondStr) {
    return true;
  } else {
    return false;
  }
}

repeats(str)




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/


str = "abcdef"
function everyOther(str){
  var newStr = "";
    for(var i = 0; i<str.length; i++) {
      if (i%2 === 0) {
        newStr += str[i];
      }
    }
    return newStr;
}

everyOther(str)





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/



str = "abbbbba"
function allEqual(str) {
  var state = true;
    for(var i = 0; i<str.length; i++) {
      if (str[0] !== str[i]) {
     state = false;
     }
}
return state
}
allEqual(str)




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 12
*/


var input = '2133248885';

function sumLetters(input)  {
var total = 0;
var result = [];
for(var i=0; i<input.length; i++) {
  result[i] = parseInt(input[i], 10); } {
 for (var j = 0; j < input.length; j++) {
total += result[j];
                }
return total;
}
}
sumLetters(input);



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/



var str = "Trevor";
function countVowels(str) {
  var vowelcount = 0;
  var vowels = 'aeiouAEIOU';
  for(var i = 0; i < str.length ; i++) {
    if (vowels.indexOf(str[i]) !== -1)
    {
      vowelcount += 1;
    }

  }
  return vowelcount;
}
countVowels(str)







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/

var str = "abc";

function split(str){
  var result = [];
  for (i = 0; i < str.length; i++){
  result.push(str[i])
}
return result;
}

split(str);




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/

var str = 'hello';
function getCodePoints(str) {
  var codePoints = [];
  for (i=0; i<str.length; i++) {
    codePoints.push(str.codePointAt(i))
    }
    return codePoints;
}
getCodePoints(str);






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/

var str = "abc";

function letterMap(str){
  var result = {};
  for (var i = 0; i < str.length; i++){
  result[str[i]] = i;
}
return result;
}
letterMap(str);







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/


var str = "hello";
function letterCount(str){
  var obj = {};
  var counter = 0;
for (var i = 0; i < str.length; i++){
  for (var j = 0; j < str.length; j++) {
    if (str[i] === str[j]) {
    counter++;
    }
  }
  obj[str[i]] = counter;
  counter = 0; // resets counter at 0
  }
return obj;
}
letterCount(str);





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,2 it should return false because the only number between 0 and 2 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/

var numberOne = 0;
var numberTwo = 6;
function threeOdds(numberOne, numberTwo) {
  var counter = 0;
  for (var i = numberOne+1; i <numberTwo; i++) {
  if (i % 2 !== 0) {
    counter ++;
  }
}
return counter >= 3; // this statement is true or false. It's like saying, if counter <=3, return true, else, return false. It does, so it will return true.
}
threeOdds(numberOne, numberTwo);








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/

var str = "ha";
var len = 9;
var character = "*";
function leftPad(str, len, char) {
var newStr = "";
for (var i = 0; i < (len-str.length); i++) {
newStr += char;
}
newStr += str
return newStr;
}
leftPad(str, len, character);






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 2 it should return "bb"
*/

var num = 4;
var str= "a";
function createString(num, str) {
  var newStr = ""
  for (var i = 0; i < num; i++) {
  newStr += str;
}
return newStr;
}
createString(num, str)





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/


var num = 4;
function factorial(num) {
var newNum = 1;
for (var i = num; i>0; i--) {
  newNum *= i;
}
return newNum
}
factorial(num)





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/


function arrayOfNumbers(num) {
  var newNum = [];
  for (var i = 1; i <= num; i++) {
    newNum.push(i)
}
return newNum
}

arrayOfNumbers(4)





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/



function evenOdd(num, numTwo) {
  var newObj = {};
  for (var i = num; i <= numTwo; i++) {
  if (num === 0 && numTwo === 0) {
    return newObj;
  }
else if(i % 2 === 0) {
    newObj[i] = "even"; }
    else {
      newObj[i] = "odd"
    }
}
return newObj;
}

evenOdd(0, 5)



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/


var num = 3;
var str = "d";
function growingKeys(num, str) {
  var newObj = {};
  var newStr = "";
for (var i = 1; i<=num; i++) {
  newStr = str.repeat(i)
  newObj[newStr] = true
  }
  return newObj
}
growingKeys (num, str)





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/


var num = 5;
var arr = [5, 5, 5, 6]
function every(arr, num) {
  var statement = true;
for (var i=0; i<arr.length; i++) {
if (num !== arr[i])
  return false;
}
return statement;
}
every(arr,num)





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/



function some(arr, num) {
  var statement = false;
for (var i=0; i<arr.length; i++) {
  if (num !== arr[i]){
    statement;
  } else {
    statement = true;
  }
}
return statement;
}
some([2,2, 2, 2, 2, 2, 2],3)





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named toSentence that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/

var arr = ["Sue", "Will", "Rachel"];
function toSentence(arr) {
  var str = "";
  for (var i = 0; i<arr.length; i++) {
    if (i === arr.length-1) {
      str = str + " and " + arr[i];
    } else if (i === arr.length-2) {
      str = str + arr[i];
    } else {``
      str += arr[i] + ", ";
    }
  }
  return str;
};
toSentence(arr);


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
*/



var arr = ["Trevor", "Cole", "Young"]
function acronym(arr) {
  var newStr = [];
  for (var i = 0; i<arr.length; i++) {
    newStr.push(arr[i][0]);
  }
  return newStr.join("");
}
acronym(arr);




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/

var arr = [5,1,9,5,7,-3];
function min(arr) {
for (var i=0; i<1; i++) {
    arr.sort(function(a, b) {return a - b});
}
return arr[0];
}
min(arr)







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}

*/

var arr1 = [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}];
function index(arr, prop) {
var newObj = {};
// for (let i = 0; i<arr.length; i++) {
//   newObj[arr[i].id] = arr[i]
// }

for (let i = 0; i<arr.length; i++) {
  newObj[arr[i][prop]] = arr[i];
}
return newObj;
}
index(arr1);


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/




var obj = {id: 1, name: "Joe"}
function invert(obj){
  var inverted = {};
  for(var key in obj){
    inverted[obj[key]] = key;
  }
  return inverted;
}
invert(obj)



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/


function addSignature (str, obj) {
  newObj = {};
  for (let key in obj) {
    newObj[key + "-signed"] = (obj[key]+" - "+str);
  }
  return newObj;
}
addSignature("Fred", {"contract": "foo"})



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/


var obj1 = {name: "Will", age: 24}


function pairs(obj) {
  var arr = [];
  for (let key in obj) {
    arr.push(key + " - " + obj[key]);
  }
return arr
}
pairs(obj1)





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/


var obj = {a: 1, b: 2, c: 5};
function sumValues(obj) {
var total = 0;
for (var key in obj) {
    total += obj[key];
}
return total;
}
sumValues(obj)





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/

var myobj = {1999: -2, 2000: -1000}
function biggestProperty(obj) {
  for (let key in obj) {
    if (!highest){
      var highest = obj[key];
      var myKey = key;
    } else{
      if (obj[key] > highest){
        highest = obj[key];
        myKey = key;
      }
    }
}
return myKey;
}
biggestProperty(myobj);

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/

var val = 4036
var obj = {1999: 4036, 2000: 7654}


function keyForValue(obj, val) {
  var hold = 0;
  for (var key in obj) {
    if (val === obj[key]) {
      hold = val;
    }
    if (hold === val) {
    return key;
}
}
}
keyForValue(obj, val)



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/

function containsValue(obj, value) {
  var hold = 0;
  for (var key in obj) {
    if(value === obj[key]) {
      hold = value;
    }
    } if(hold !== 0) {
      return true;
    } if (hold === 0) {
      return false;
  }
}
containsValue({}, 4036)







//

/*
PRACTICE BELOW - OTHER ACCUM PROBLEMS!!!!!!!!!

//
// /*
// Create a function that, given a string, returns all of that strings contents, but without blanks. If given the string " Sw  e  e t alg  o" it will return "Sweetalgo"
// */
//
// var myStr = (" Sw  e  e t alg  o")
// function withoutSpaces(input){
//  var result = input.replace(/ /g, "");
//  console.log(result);
//
// }
// withoutSpaces(myStr);
//
// /*
// Create a function that, given a string, returns the string's acronym (first letters capitalized). If given the string "What's up buddy" return "WUB".
// */
//
// // var str = "Trevor cole Young";
// function acronym(str) {
//   var arr = str.split(" ");
//   var newStr = "";
//   for (var i = 0; i<arr.length; i++) {
//     newStr += arr[i][0];
//   }
//   return newStr.toUpperCase();
// }
// acronym(str);
//
//
// /*
// Write a function that takes an array of strings and a Number value to represent string length. Remove all strings in the array with a length shorter than that number. ["Hey", "you're", "great", "Man"], 4 would return ["you're", "great"]
// */
//
// var num = 4;
// var arr = ["Hurricane", "Irma", "is", "coming", "for", "us", "all!"];
// function greaterThanFour(arr, num) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i].length >= num) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
//
// greaterThanFour(arr, num);

/*
  LOOPING A TRIANGLE
  Write a loop that makes num calls to console.log to output the following triangle:

  #
  ##
  ###
  ####
  #####
  ######
  #######

*/

function loopingTriangle(num) {
  // SOLVE HERE
};

// tester. leave untouched.
console.log('\n-------- TESTING loopingTriangle --------\n');
loopingTriangle(7);

/*
  FIZZBUZZ
  Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
  For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 
  (and not 3), print "Buzz" instead.

  When you have that working, modify your program to print "FizzBuzz" for numbers that are 
  divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only
  one of those).
*/

function fizzBuzz() {
  // SOLVE HERE
}
console.log('\n-------- TESTING fizzBuzz --------\n');
fizzBuzz();

/*
  CHESSBOARD
  Write a program that creates a string that represents an 8×8 grid, using newline characters
  to separate lines. At each position of the grid there is either a space or a "#" character. 
  The characters should form a chessboard.

  Passing this string to console.log should show something like this:

  # # # #
 # # # # 
  # # # #
 # # # # 
  # # # #
 # # # # 
  # # # #
 # # # #

  When you have a program that generates this pattern, define a binding size = 8 
  and change the program so that it works for any size, outputting a grid of the 
  given width and height. 
*/

function chessboard(rows, columns) {
  //SOLVE HERE
}
console.log('\n-------- TESTING chessboard --------\n');
chessboard(8,8);
/*
  MINIMUM
  Write a function min that takes two arguments and returns their minimum.
  ( will Math.min help? )
*/

function returnMin(a,b) {
  //SOLVE HERE
}
console.log('\n-------- TESTING returnMin --------\n');
returnMin(10,2);
/* 
  RECURSION
  We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd 
  by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a 
  positive whole number is even or odd:

  Zero is even.

  One is odd.

  For any other number N, its evenness is the same as N - 2.

  Define a recursive function isEven corresponding to this description. 
  The function should accept a single parameter (a positive, whole number) and return a Boolean.

  Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

function isEven(num) {
  //SOLVE HERE
}

console.log('\n-------- TESTING isEven --------\n');
console.log(isEven(50 + '\n'));
console.log(isEven(75 + '\n'));
console.log(isEven(-1));

/* 
  Bean counting
  You can get the Nth character, or letter, from a string by writing "string"[N]. 
  The returned value will be a string containing only one character (for example, "b"). 
  The first character has position 0, which causes the last one to be found at position string.length - 1. 
  In other words, a two-character string has length 2, and its characters have positions 0 and 1.

  Write a function countBs that takes a string as its only argument and returns a number that indicates 
  how many uppercase “B” characters there are in the string.

  Wite a function called countChar that takes a two args, a string and a character and returns a number that indicates 
  how many of that characters there are in the string.
  Returns the number of the characters found. 

*/
function beanCounting(string, char) {
  //SOLVE HERE
}

console.log('\n-------- TESTING beanCounting --------\n');
beanCounting('Apples are very tasty','y') === 2 ? console.log('ok') : console.log('Error');

/*

  SUM OF A RANGE
  
  Write a range function that takes three arguments, start, end and step, and returns an array containing all the numbers 
  from start up to (and including) end, increasingn or decreasing following the "step" variable.
  If no step is given, the elements go up by increments of one.
  The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works 
  with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

  Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 

*/

function sumOfRange() {
  //SOLVE HERE
}

console.log('\n-------- TESTING sumOfrange --------\n');
let arrBuffsor = [ 10,8,6,4,2 ];
JSON.stringify(sumOfRange(10,1,-2))===JSON.stringify(arrBuffsor) ? console.log('ok') : console.log('Error');

/*
  REVERSING AN ARRAY

  Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
  For this exercise, write the functions reverseArrayInPlace. It should do what the reverse method does: 
  it modifies the array given as argument by reversing its elements. You cannot use the standard reverse method.

*/

function reverseArrayInPlace(arr) {
  //SOLVE HERE
}

console.log('\n-------- TESTING reverseArrayInPlace --------\n');
let array=[1,2,3,4,5,6];
let arrayReversed=[6,5,4,3,2,1];
JSON.stringify(reverseArrayInPlace(array))===JSON.stringify(arrayReversed) ? console.log('ok') : console.log('Error');

/**
  A LIST

  Objects, as generic blobs of values, can be used to build all sorts of data structures. 
  A common data structure is the list (not to be confused with array). A list is a nested set of objects, 
  with the first object holding a reference to the second, the second to the third, and so on.

  let list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  };
  The resulting objects form a chain. (Linked list)

  A nice thing about lists is that they can share parts of their structure. 
  For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} 
  (with list referring to the binding defined earlier), they are both independent lists,
  but they share the structure that makes up their last three elements. 
  The original list is also still a valid three-element list.

  Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
  Also write a listToArray function that produces an array from a list. Then add a helper function prepend, 
  which takes an element and a list and creates a new list that adds the element to the front of the input list, 
  and nth, which takes a list and a number and returns the element at the given position in the list 
  (with zero referring to the first element) or undefined when there is no such element.

  If you haven’t already, also write a recursive version of nth. 

**/


function arrayToList(arr) {
  // SOLVE HERE
}

function listToArray(list) {
  // SOLVE HERE
}

function prepend(el, list) {
  // SOLVE HERE
}

function nth(list, num) {
  // SOLVE HERE
}

console.log('\n-------- TESTING arrayToList --------\n');
console.log(arrayToList([1,2,3])); 
// →  { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }
let list= { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
console.log(listToArray(list)); 
// →  [ 1, 2, 3]
console.log(prepend(10, prepend(20, null))); 
// →  {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1) + ', ' + nth(arrayToList([10, 20, 30]), 6));
// → 20, undefined

/* 

  DEEP COMPARISON
  The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

  Write a function deepEqual that takes two values and returns true only if they are the same value or are objects 
  with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

  To find out whether values should be compared directly (use the === operator for that) or have their properties compared,
  you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. 
  But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

  The Object.keys function will be useful when you need to go over the properties of objects to compare them.

*/

function deepComparison() {
  // SOLVE HERE
}

console.log('\n-------- TESTING deepComparison --------\n');
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true


/* 

Flattening
Use the reduce method in combination with the concat method to “flatten” an array of arrays 
into a single array that has all the elements of the original arrays.

*/

function flattening(arr) {
  // SOLVE HERE 
}

console.log('\n-------- TESTING flattening --------\n');
let arrOfArrs = [[1, 2, 3], [4, 5], [6]];
console.log(flattening(arrOfArrs)); 
// → [ 1, 2, 3, 4, 5, 6 ]

/* 

Write a higher-order function loop that provides something like a for loop statement. 
It takes a value, a test function, an update function, and a body function. 
Each iteration, it first runs the test function on the current loop value and stops if that returns false. 
Then it calls the body function, giving it the current value. Finally, it calls the update function 
to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.
  (or something else :) )

*/

function hoLoop(val,test,update,body) {
  // SOLVE HERE
}

console.log('\n-------- TESTING hoLoop --------\n');
hoLoop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

/* 

Analogous to the some method, arrays also have an every method. 
This one returns true when the given function returns true for every element in the array. 
In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. 
Write two versions, one using a loop and one using the some method.

*/

function every(array, test) {
  // SOLVE HERE
}

function everySome(array, test) {
  // SOLVE HERE
}

console.log('\n-------- TESTING every --------\n');
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
console.log('\n-------- TESTING everySome --------\n');
console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true
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
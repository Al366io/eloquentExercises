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
  let string = '';
  for (let i=0; i<num; i++) {
    string+='#';
    console.log(string);
  }
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
  for (let i=1; i<101; i++) {
    if (( i%3===0 ) && ( i%5===0 )) {
      console.log('FizzBuzz');
      continue;
    }
    if (( i%3===0) && ( i%5!==0 )) {
      console.log('Fizz');
      continue;
    }
    if (( i%3!==0) && ( i%5===0 )) {
      console.log('Buzz');
      continue;
    }
    console.log(i);
  }
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
  let chessboard = '';
  let prev='#';
  for (let i=0; i<rows-1; i++) {
    for(let j=0; j<columns; j++) {
      if (prev==='#') {
        chessboard+= ' ';
        prev = ' ';
      }
      else {
        chessboard+= '#';
        prev = '#';
      }
    }
    if(prev===' ')
      prev='#';
    else
      prev=' ';
    chessboard+='\n';
  }
  console.log(chessboard);
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
  console.log(Math.min(a,b));
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
  if (num < 0)
    return 'Number is Negative';
  if (num === 0)
    return true;
  if (num === 1)
    return false;
  return isEven(num - 2);
}

console.log('\n-------- TESTING isEven --------\n');
console.log(isEven(50 + '\n'));
console.log(isEven(75 + '\n'));
console.log(isEven(-1));
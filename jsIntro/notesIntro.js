// Syntax:

// let assigns vars
// const assigns vars that cannot be changed

let age = 18;
const pi = 3.1415;

// methods: kind of like built in functions
// syntax is object.method()
// properties: build in get functions, no ()
// syntax is object.property (like array.length)

// conditionals
if (1 == 1) {
  let math = "works";
} else {
  let math = "not works";
}

// functions:
function add(a, b) {
  return a + b;
}

//----------------------------------------------------------------------------------------------------
// loops

// while loop
let condition = false;
while (condition) {}

// this checks the condition after the loop has iterated once
do {} while (condition);

// for loop

// for (begin; condition; step){   }
for (let i = 0; i < 2; i++) {}

// stuff for loops control

// break;
// ends the loop

// continue
// ends the current iteration of the loop and moves onto the next

// break outer;  continue outer;
// these labels break/continue the outer loop, not the inner loop

//----------------------------------------------------------------------------------------------------
// arrays

// syntax to make new array:
let arr1 = new Array(); // or
let arr = [];

// to make an non empty array:
let arr2 = ["thing1", "thing2", "thing3"];

arr2[0]; // gets the 0 index element
arr2.length; // gets the length of the element
arr2.at(-1); // gets the -1 index element (normal indexing does not work with negatives

//----------------------------------------------------------------------------------------------------
// DOM Manipulation
